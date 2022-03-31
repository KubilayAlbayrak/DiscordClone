import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/database/dto/create-user.dto';
import { UserDTO } from 'src/database/dto/user.dto';
import { Repository } from 'typeorm';
import User from '../../database/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  private entityToDTO(user: User): UserDTO {
    const userDto = new UserDTO();
    userDto.id = user.id;
    userDto.username = user.username;
    userDto.password = user.password;

    return userDto;
  }

  public async findUserById(userId: string) {
    const user: User = await this.userRepository.findOne(userId);

    if (!user) {
      throw new NotFoundException(`User with the id ${userId} was not found`);
    }
    const userDTO: UserDTO = this.entityToDTO(user);

    return userDTO;
  }
  public async findUserByUsername(username: string) {
    const user: User = await this.userRepository.findOne({
      username: username,
    });
    if (!user) {
      throw new NotFoundException(`Username ${username} was not found`);
    }
    const userDTO: UserDTO = this.entityToDTO(user);

    return userDTO;
  }

  public async createUser(createUserRequest: CreateUserDTO) {
    const newUser = await this.userRepository.create(createUserRequest);
    await this.userRepository.save(newUser);
    return newUser;
  }
}
