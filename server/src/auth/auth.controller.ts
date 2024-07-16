import {Controller, Post, UseGuards, Request, Get} from '@nestjs/common';
import { AuthService } from './auth.service';

import {LocalAuthGuard} from "./guard/local-auth.guard";
import {JwtAuthGuard} from "./guard/jwt-auth.guard";


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);

  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req) {
    return req.user;
  }
}
