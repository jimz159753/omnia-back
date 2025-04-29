import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'username', example: 'luis@gmail.com' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'password', example: 'secret_password' })
  @IsString()
  password: string;
}
