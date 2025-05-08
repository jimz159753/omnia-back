import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { CalApiService } from 'src/cal-api/cal-api.service';
import { BookingResponse, PaidBooking } from './entities/booking.interface';
import { DatabaseService } from 'src/database/database.service';
import { ClientStatus } from 'src/client/entities/client.interface';

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
    const client = await this.databaseService.client.findUnique({
      // check if client already exists
      where: {
        phone: phone.value,
        email: email.value,
      },
    });
    if (!client) {
      // create new client
      const newClient = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        status: ClientStatus.PAID,
      };
      return await this.databaseService.client.create({ data: newClient });
    } else {
      // update client and add status to client
      const updatedClient = {
        status: ClientStatus.PAID,
      };
      return await this.databaseService.client.update({
        where: { id: client.id },
        data: updatedClient,
      });
    }
  }

  // make checkin for paid booking
}
