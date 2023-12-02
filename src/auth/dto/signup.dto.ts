import { IsNotEmpty, IsEmail } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty({ message: 'Firstname is empty!' })
  firstname: string;

  @IsNotEmpty({ message: 'Lastname is empty!' })
  lastname: string;

  @IsNotEmpty({ message: 'Email is empty!' })
  @IsEmail()
  email: string;

  @IsNotEmpty()
  gender?: string;

  @IsNotEmpty({ message: 'Password is empty!' })
  password: string;
}
