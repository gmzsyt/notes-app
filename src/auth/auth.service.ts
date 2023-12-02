// auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { AuthDbService } from './auth-db.service';

@Injectable()
export class AuthService {
  constructor(private readonly authDbService: AuthDbService) {}

  async registerUser(email: string, password: string): Promise<any> {
    return await this.authDbService.createUser(email, password);
  }

  async getAllUsers(): Promise<any> {
    return await this.authDbService.getAllUsers();
  }

  async getUserById(userId: string): Promise<any> {
    return await this.authDbService.getUserById(userId);
  }

  async updateUser(userId: string, userData: any): Promise<any> {
    return await this.authDbService.updateUser(userId, userData);
  }

  async deleteUser(userId: string): Promise<any> {
    return await this.authDbService.deleteUser(userId);
  }
}
