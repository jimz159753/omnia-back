import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  HttpStatus,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Bookings')
@Controller('booking')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @HttpCode(HttpStatus.BAD_REQUEST)
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  findAll() {
    return this.bookingService.findAll();
  }

  @Get('/by-type-event-ids')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  findByTypeEventIds(@Query('eventTypeIds') eventTypeIds: string) {
    return this.bookingService.findByEventTypeIds(eventTypeIds);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @Post('/paid')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  getPaidBooking(@Body() paidBooking: any) {
    console.log('paidBooking', paidBooking);
    return this.bookingService.getPaidBooking(paidBooking);
  }
}
