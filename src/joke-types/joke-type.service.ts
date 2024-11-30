import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JokeType } from '../joke-types/joke-type.entity';
import { CreateJokeTypeDto } from './dto/create-joke-type-dto';

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

  async createJokeType(
    createJokeTypeDto: CreateJokeTypeDto,
  ): Promise<JokeType> {
    const { name } = createJokeTypeDto;

    let jokeType = await this.jokeTypeRepository.findOne({ where: { name } });

    if (!jokeType) {
      jokeType = this.jokeTypeRepository.create({ name });
      await this.jokeTypeRepository.save(jokeType);
    }

    return jokeType;
  }
}
