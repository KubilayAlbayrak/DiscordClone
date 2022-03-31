import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from 'src/database/dto/create-user.dto';
import RequestWithUser from 'src/interfaces/requestWithUser.i';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwtAuth.guard';
import { LocalAuthGuard } from './localAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}
  @Post('register')
  public async register(@Body() registerRequest: CreateUserDTO) {
    const resp = await this.authService.register(registerRequest);
    return resp;
  }

  @HttpCode(200)
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() request: RequestWithUser) {
    const { user } = request;
    const cookie = await this.authService.getCookieWithJwtToken(user);
    request.res.setHeader('Set-Cookie', cookie);
    return request.res.send(user);
  }

  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(@Req() request: RequestWithUser) {
    request.res.setHeader('Set-Cookie', this.authService.getCookieforLogout());
    request.res.send();
  }
}
