import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { CalApiService } from 'src/cal-api/cal-api.service';
import { BookingResponse } from './entities/booking.interface';

@Injectable()
export class BookingService {
  constructor(private readonly calApiService: CalApiService) {}

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
}
