import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from 'src/database/dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  public async getUserById(@Param('id') id: string) {
    return await this.userService.findUserById(id);
  }
  @Post()
  public async createUser(@Body() createUserRequest: CreateUserDTO) {
    const resp = await this.userService.createUser(createUserRequest);
    return resp;
  }
}
