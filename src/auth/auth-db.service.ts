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

  async getAllUsers(): Promise<any> {
    try {
      const result = await this.client.query('SELECT * FROM users');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(userId: string): Promise<any> {
    try {
      const result = await this.client.query('SELECT * FROM users WHERE id = $1', [userId]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async updateUser(userId: string, userData: any): Promise<any> {
    try {
      const result = await this.client.query(
        'UPDATE users SET email = $1, password = $2 WHERE id = $3 RETURNING *',
        [userData.email, userData.password, userId]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(userId: string): Promise<any> {
    try {
      const result = await this.client.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}
