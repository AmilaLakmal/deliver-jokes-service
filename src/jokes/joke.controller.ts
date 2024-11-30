import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JokeService } from './joke.service';
import { GetJokeByTypeDto } from './dto/get-joke-by-type-dto';
import { CreateJokeDto } from './dto/create-joke-dto';

@Controller('jokes')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Get('random')
  @UsePipes(new ValidationPipe({ transform: true }))
  getRandomJoke(@Query() getJokeByTypeDto: GetJokeByTypeDto) {
    return this.jokeService.getRandomJoke(getJokeByTypeDto.typeId);
  }

  @Post('create')
  async createJoke(@Body() createJokeDto: CreateJokeDto) {
    return this.jokeService.createJoke(createJokeDto);
  }
}
