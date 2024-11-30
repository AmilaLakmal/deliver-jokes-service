import { Module } from '@nestjs/common';
import { JokesModule } from './jokes/jokes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Joke } from './jokes/joke.entity';
import { JokeType } from './joke-types/joke-type.entity';
import * as dotenv from 'dotenv';
import { JokeTypesModule } from './joke-types/joke-type.module';
import { AuthModule } from './authentication/auth.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Joke, JokeType],
      synchronize: false,
      logging: true,
    }),
    JokesModule,
    JokeTypesModule,
    AuthModule,
  ],
})
export class AppModule {}
