import { Module } from '@nestjs/common';
import { EventTypeService } from './event-type.service';
import { EventTypeController } from './event-type.controller';
import { CalApiService } from 'src/cal-api/cal-api.service';

@Module({
  controllers: [EventTypeController],
  providers: [EventTypeService, CalApiService],
})
export class EventTypeModule {}
