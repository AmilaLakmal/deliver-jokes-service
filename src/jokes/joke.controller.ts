import { Controller, Get } from '@nestjs/common';
import { JokeService } from './joke.service';

@Controller('jokes')
export class JokeController {
  constructor(private readonly jokeService: JokeService) {}

  @Get('random')
  getRandomJoke() {
    return this.jokeService.getRandomJoke();
  }
}
