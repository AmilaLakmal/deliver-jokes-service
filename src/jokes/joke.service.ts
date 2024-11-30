import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Joke } from './joke.entity';
import { JokeType } from '../joke-types/joke-type.entity';

@Injectable()
export class JokeService {
  constructor(
    @InjectRepository(Joke)
    private readonly jokeRepository: Repository<Joke>,
    @InjectRepository(JokeType)
    private readonly jokeTypeRepository: Repository<JokeType>,
  ) {}

  async getRandomJoke() {
    const jokes = await this.jokeRepository.find({
      relations: ['type'],
    });

    if (jokes.length === 0) {
      throw new Error('No jokes available');
    }

    return jokes[Math.floor(Math.random() * jokes.length)];
  }
}
