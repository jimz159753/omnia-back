import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsEmail,
  ValidateNested,
  IsISO8601,
} from 'class-validator';
import { Type } from 'class-transformer';

class AttendeeDto {
  @ApiProperty({ description: 'Name of the attendee' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Email of the attendee' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Time zone of the attendee' })
  @IsString()
  timeZone: string;

  @ApiProperty({ description: 'Language preference of the attendee' })
  @IsString()
  language: string;
}

export class CreateBookingDto {
  @ApiProperty({ description: 'Title of the booking' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Description of the booking', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Start time of the booking in ISO 8601 format' })
  @IsISO8601()
  start: string;

  @ApiProperty({ description: 'End time of the booking in ISO 8601 format' })
  @IsISO8601()
  end: string;

  @ApiProperty({ description: 'Event type ID' })
  @IsNumber()
  eventTypeId: number;

  @ApiProperty({ description: 'Attendees information', type: [AttendeeDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AttendeeDto)
  attendees: AttendeeDto[];
}
