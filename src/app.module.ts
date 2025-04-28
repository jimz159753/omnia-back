import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ClientModule, DatabaseModule, UserModule, AuthModule],
  providers: [DatabaseService],
})
export class AppModule {}
