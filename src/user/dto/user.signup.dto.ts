import { IsNotEmpty, IsEmail, IsUUID } from 'class-validator';

export class SignUpDto {
  @IsUUID()
  id: string;

  @IsNotEmpty({ message: 'Firstname is empty!' })
  firstname: string;

  @IsNotEmpty({ message: 'Lastname is empty!' })
  lastname: string;

  @IsNotEmpty({ message: 'Email is empty!' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Password is empty!' })
  password: string;
}
