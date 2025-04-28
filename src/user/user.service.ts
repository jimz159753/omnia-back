import { Injectable, Param } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.databaseService.user.create({ data: createUserDto });
  }

  async findAll() {
    return await this.databaseService.user.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(@Param('id') id: number, updateUserDto: Prisma.UserUpdateInput) {
    return await this.databaseService.client.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await this.databaseService.client.delete({
      where: {
        id,
      },
    });
  }
}
