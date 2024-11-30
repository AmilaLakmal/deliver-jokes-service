import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JokeType } from '../joke-types/joke-type.entity';

@Injectable()
export class JokeTypeService {
  constructor(
    @InjectRepository(JokeType)
    private readonly jokeTypeRepository: Repository<JokeType>,
  ) {}

  async getAllJokeTypes() {
    try {
      const jokeTypes = await this.jokeTypeRepository.find();

      return {
        success: true,
        message: 'Joke types fetched successfully',
        data: jokeTypes,
      };
    } catch (error) {
      return {
        success: false,
        error: error?.message ?? 'Internal server error occured',
      };
    }
  }
}
