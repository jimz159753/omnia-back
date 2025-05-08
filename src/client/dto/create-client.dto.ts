import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({ description: 'name', example: 'Luis' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'email', example: 'luis@gmail.com' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'phone', example: '3315027257' })
  @IsString()
  phone: string;

  @ApiProperty({ description: 'status', example: 'paid' })
  @IsString()
  status: string;
}
