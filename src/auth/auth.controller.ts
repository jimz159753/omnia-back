import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateAuthDto } from './dto/create-auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: CreateAuthDto) {
    return this.authService.signup(body.email, body.password);
  }

  @Post('signin')
  signin(@Body() body: CreateAuthDto) {
    return this.authService.signin(body.email, body.password);
  }
}
