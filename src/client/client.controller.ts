import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { UpdateClientDto } from './dto/update-client.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Clients')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Client created successfully',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.OK, description: 'Clients found' })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Clients not found',
  })
  findAll() {
    return this.clientService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.OK, description: 'Client found' })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Client not found',
  })
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Client updated successfully',
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Client not found',
  })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(+id, updateClientDto);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Client removed successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Client not found',
  })
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}
