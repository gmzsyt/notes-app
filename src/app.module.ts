import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { NotesModule } from './notes/notes.module';


@Module({
  imports: [AuthModule, DbModule,NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
