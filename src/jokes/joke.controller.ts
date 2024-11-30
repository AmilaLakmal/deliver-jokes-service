import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JokeService } from './joke.service';
import { GetJokeByTypeDto } from './dto/get-joke-by-type-dto';

@Controller('jokes')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Get('random')
  @UsePipes(new ValidationPipe({ transform: true }))
  getRandomJoke(@Query() getJokeByTypeDto: GetJokeByTypeDto) {
    return this.jokeService.getRandomJoke(getJokeByTypeDto.typeId);
  }
}
