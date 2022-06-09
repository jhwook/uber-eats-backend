import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateAccountInput } from './dtos/create-account.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async createAccount({ email, password, role }: CreateAccountInput) {
    try {
      const exists = await this.usersRepository.findOne({ email });
      if (exists) {
        return;
      }
      await this.usersRepository.save(
        this.usersRepository.create({ email, password, role }),
      );
    } catch (error) {
      return;
    }
  }
}
