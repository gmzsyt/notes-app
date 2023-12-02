// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { AuthDbService } from './auth-db.service';

@Injectable()
export class AuthService {
  constructor(private readonly authDbService: AuthDbService) {}

  async registerUser(email: string, password: string): Promise<any> {
    return this.authDbService.createUser(email, password);
  }
}
