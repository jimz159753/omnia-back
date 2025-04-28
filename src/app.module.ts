import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ClientModule, DatabaseModule],
  providers: [DatabaseService],
})
export class AppModule {}
