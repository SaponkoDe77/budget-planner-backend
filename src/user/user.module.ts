import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/database/postgres.module';
import { userProvider } from './provider/user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [UserService, ...userProvider],
  exports: [UserService],
})
export class UserModule {}
