import { Module, Global } from '@nestjs/common';
import { CalApiService } from './cal-api.service';

@Global()
@Module({
  providers: [CalApiService],
  exports: [CalApiService],
})
export class CalApiModule {}
