import { Body, Injectable, Param } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class ClientService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createClientDto: Prisma.ClientCreateInput) {
    return this.databaseService.client.create({ data: createClientDto });
  }

  async findAll() {
    return await this.databaseService.client.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.client.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    @Param('id') id: number,
    @Body() updateClientDto: Prisma.ClientUpdateInput,
  ) {
    return await this.databaseService.client.update({
      where: {
        id,
      },
      data: updateClientDto,
    });
  }

  async remove(@Param('id') id: number) {
    return await this.databaseService.client.delete({
      where: {
        id,
      },
    });
  }
}
