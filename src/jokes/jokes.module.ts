import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokeController } from './joke.controller';
import { JokeService } from './joke.service';
import { Joke } from './joke.entity';
import { JokeType } from '../joke-types/joke-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Joke, JokeType])],
  controllers: [JokeController],
  providers: [JokeService],
})
export class JokesModule {}
