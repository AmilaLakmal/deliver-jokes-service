import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Joke } from './joke.entity';
import { JokeType } from '../joke-types/joke-type.entity';
import { CreateJokeDto } from './dto/create-joke-dto';
import { JokeTypeService } from 'src/joke-types/joke-type.service';

@Injectable()
export class JokeService {
  constructor(
    @InjectRepository(Joke)
    private readonly jokeRepository: Repository<Joke>,
    private jokeTypeService: JokeTypeService,
  ) {}

  async getRandomJoke(typeId: string) {
    try {
      const jokes = await this.jokeRepository.find({
        where: { type: { id: typeId } },
        relations: ['type'],
      });

      if (jokes.length === 0) {
        return {
          success: false,
          error: 'No jokes available',
        };
      }

      return {
        success: true,
        message: 'Joke fetched successfully',
        data: jokes[Math.floor(Math.random() * jokes.length)],
      };
    } catch (error) {
      return {
        success: false,
        error: error?.message ?? 'Internal server error occured',
      };
    }
  }

  async createJoke(createJokeDto: CreateJokeDto) {
    const jokeType = await this.jokeTypeService.createJokeType({
      name: CreateJokeDto?.name,
    });

    const joke = this.jokeRepository.create({
      content: createJokeDto.content,
      type: jokeType,
    });

    await this.jokeRepository.save(joke);

    return {
      success: true,
      message: 'Joke created successfully',
      data: joke,
    };
  }
}
