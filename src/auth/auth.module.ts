import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthDbService } from './auth-db.service';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule], 
  controllers: [AuthController],
  providers: [AuthService, AuthDbService],
})
export class AuthModule {}
