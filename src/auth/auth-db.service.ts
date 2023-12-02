// auth/auth-db.service.ts
import { Injectable } from '@nestjs/common';
import { PG_CONNECTION } from '../constants';
import { Client } from 'pg';
import { DATABASE_CONFIG } from '../config/config';

@Injectable()
export class AuthDbService {
  private readonly client: Client;

  constructor() {
    this.client = new Client(DATABASE_CONFIG);
    this.client.connect();
  }

  async createUser(email: string, password: string): Promise<any> {
    try {
      const result = await this.client.query(
        'INSERT INTO users(email, password) VALUES ($1, $2) RETURNING *',
        [email, password]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}
