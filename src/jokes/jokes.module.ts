import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokeController } from './joke.controller';
import { JokeService } from './joke.service';
import { Joke } from './joke.entity';
import { JokeType } from '../joke-types/joke-type.entity';
import { JokeTypeService } from 'src/joke-types/joke-type.service';
import { AuthService } from 'src/authentication/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Joke, JokeType])],
  controllers: [JokeController],
  providers: [JokeService, JokeTypeService, AuthService, JwtService],
})
export class JokesModule {}
