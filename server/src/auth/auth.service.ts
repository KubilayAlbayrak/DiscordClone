import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/database/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/modules/user/user.service';
import PostgresErrorCodeEnum from 'src/database/postgresErrorCodes';
import TokenPayload from 'src/interfaces/tokenPayload.i';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import User from 'src/database/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}
  public async register(registerRequest: CreateUserDTO) {
    try {
      const hashedPassword = await bcrypt.hash(registerRequest.password, 12);
      const user = await this.userService.createUser({
        ...registerRequest,
        password: hashedPassword,
      });
      user.password = undefined;
      return user;
    } catch (error) {
      if (error?.code === PostgresErrorCodeEnum.uniqueViolation)
        throw new HttpException('Username taken', HttpStatus.BAD_REQUEST);
    }
    throw new HttpException(
      'Something went wrong',
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
  public async validateUser(
    username: string,
    plainTextpassword: string
  ): Promise<any> {
    const user = await this.userService.findUserByUsername(username);
    await this.verifyPassword(plainTextpassword, user.password);
    user.password = undefined;
    return user;
  }

  public async getCookieWithJwtToken(user: User) {
    const payload: TokenPayload = { user };
    const token = this.jwtService.sign(payload);
    return `Authentication=${token}; HTTPOnly; Path=/; Max-Age:${this.configService.get(
      'JWT_EXPIRATION_TIME'
    )} `;
  }

  private async verifyPassword(
    plainTextpassword: string,
    hashedPassword: string
  ) {
    const arePasswordsMatching = await bcrypt.compare(
      plainTextpassword,
      hashedPassword
    );

    if (!arePasswordsMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST
      );
    }
  }
  public getCookieforLogout() {
    return 'Authentication=; HttpOnly; Path=/; Max-Age:0';
  }
}
