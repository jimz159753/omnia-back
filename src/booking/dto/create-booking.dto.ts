import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({ description: 'Name of the attendee' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Email of the attendee' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Phone number of the attendee' })
  @IsString()
  phone: string;
}
