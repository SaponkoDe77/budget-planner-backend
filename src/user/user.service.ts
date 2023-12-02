import { Inject, Injectable } from '@nestjs/common';
import { SignUpDto } from 'src/auth/dto/signup.dto';
import { Repository } from 'typeorm';
import { User } from './entities/User.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(userData: SignUpDto) {
    this.userRepository.save(userData);
  }
}
