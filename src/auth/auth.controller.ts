import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async registerUser(@Body('email') email: string, @Body('password') password: string): Promise<any> {
    return await this.authService.registerUser(email, password);
  }

  @Get('users')
  async getAllUsers(): Promise<any> {
    return await this.authService.getAllUsers();
  }

  @Get('users/:id')
  async getUserById(@Param('id') userId: string): Promise<any> {
    return await this.authService.getUserById(userId);
  }

  @Put('users/:id')
  async updateUser(@Param('id') userId: string, @Body() userData: any): Promise<any> {
    return await this.authService.updateUser(userId, userData);
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') userId: string): Promise<any> {
    return await this.authService.deleteUser(userId);
  }
}
