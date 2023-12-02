// auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registerUser(@Body('email') email: string, @Body('password') password: string): Promise<any> {
    return this.authService.registerUser(email, password);
  }
}
