import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signup(userData: SignUpDto) {
    console.log(userData);
    return this.userService.create(userData);
  }
}
