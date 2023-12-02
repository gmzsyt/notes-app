// db.module.ts
import { Module } from '@nestjs/common';
import { dbProvider } from './db.providers';

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DbModule {}
