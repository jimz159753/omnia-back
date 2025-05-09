import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { CalApiService } from 'src/cal-api/cal-api.service';
import {
  BookingResponse,
  PaidBooking,
  PaymentStatus,
} from './entities/booking.interface';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BookingService {
  constructor(
    private readonly calApiService: CalApiService,
    private readonly databaseService: DatabaseService,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    return await this.calApiService.post<BookingResponse>(
      '/bookings',
      createBookingDto,
    );
  }

  async findAll() {
    return await this.calApiService.get<BookingResponse>('/bookings');
  }

  async findOne(id: number) {
    return await this.calApiService.get<BookingResponse>(`/bookings/${id}`);
  }

  async findByEventTypeIds(eventTypeIds: string) {
    return await this.calApiService.get<BookingResponse>(`/bookings`, {
      params: {
        eventTypeIds: eventTypeIds,
      },
      headers: {
        'cal-api-version': '2024-08-13',
      },
    });
  }
  async getPaidBooking(paidBooking: PaidBooking) {
    const { name, email, phone } = paidBooking.payload.responses;
    const price = paidBooking.payload.price;
    const client = await this.databaseService.client.findFirst({
      // check if client already exists
      where: {
        OR: [{ phone: phone.value }, { email: email.value }],
      },
    });
    if (!client) {
      // create new client
      const newClient = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        payments: {
          create: {
            amount: price,
            status: PaymentStatus.PAID,
          },
        },
      };
      return await this.databaseService.client.create({
        data: newClient,
        include: { payments: true },
      });
    } else {
      // update client and add status to client
      const updatedClient = {
        payments: {
          create: {
            amount: price,
            status: PaymentStatus.PAID,
          },
        },
      };
      return await this.databaseService.client.update({
        where: { id: client.id },
        data: updatedClient,
        include: { payments: true },
      });
    }
  }
}
