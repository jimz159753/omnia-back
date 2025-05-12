import { Body, Injectable, Param } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';
import { CreateClientDto } from './dto/create-client.dto';
import { ClientStatus } from './entities/client.interface';

@Injectable()
export class ClientService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createClientDto: CreateClientDto) {
    const client = {
      ...createClientDto,
      status: ClientStatus.PAID,
    };
    return this.databaseService.client.create({
      data: client,
      include: { payments: true },
    });
  }

  async findAll() {
    return await this.databaseService.client.findMany({
      include: { payments: true },
    });
  }

  async findOne(id: number) {
    return await this.databaseService.client.findUnique({
      where: {
        id,
      },
      include: { payments: true },
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

  async makeCheckin(clientId: number) {
    return await this.databaseService.client.update({
      where: { id: clientId },
      data: { checkin: true },
      include: { payments: true },
    });
  }
}
