import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event-type.dto';
import { UpdateEventTypeDto } from './dto/update-event-type.dto';
import { CalApiService } from 'src/cal-api/cal-api.service';
import { IEventTypeResponse } from './entities/event-type.interface';

@Injectable()
export class EventTypeService {
  constructor(private readonly calApiService: CalApiService) {}

  async create(createEventTypeDto: CreateEventTypeDto) {
    return await this.calApiService.post<IEventTypeResponse>(
      '/event-types',
      createEventTypeDto,
    );
  }

  async findAll() {
    return await this.calApiService.get<IEventTypeResponse>('/event-types', {
      headers: {
        'cal-api-version': '2024-08-14',
      },
      params: {
        username: 'prueba140992',
      },
    });
  }

  async findOne(id: number) {
    return await this.calApiService.get<IEventTypeResponse>(
      `/event-types/${id}`,
    );
  }

  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    return await this.calApiService.patch<IEventTypeResponse>(
      `/event-types/${id}`,
      updateEventTypeDto,
    );
  }

  async remove(id: number) {
    return await this.calApiService.delete<IEventTypeResponse>(
      `/event-types/${id}`,
    );
  }
}
