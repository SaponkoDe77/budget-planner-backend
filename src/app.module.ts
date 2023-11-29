import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.app.env', '.database.env'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
