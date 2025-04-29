import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventTypeModule } from './event-type/event-type.module';
import { CalApiService } from './cal-api/cal-api.service';
import { CalApiModule } from './cal-api/cal-api.module';

@Module({
  imports: [ClientModule, DatabaseModule, UserModule, AuthModule, EventTypeModule, CalApiModule],
  providers: [DatabaseService, CalApiService],
})
export class AppModule {}
