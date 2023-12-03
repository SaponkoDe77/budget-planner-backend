import { Inject, Injectable } from '@nestjs/common';
import { SignUpDto } from 'src/auth/dto/signup.dto';
import { Repository } from 'typeorm';
import { User } from './entities/User.entity';
import { bcryptPassword } from './helpers/password.helper';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(userData: SignUpDto) {
    userData.password = await bcryptPassword(userData.password);

    if (!userData.password) {
      throw new Error('Password not hashed');
    }
    this.userRepository.save(userData);
  }
}
