import { Controller, Get } from '@nestjs/common';
import { JokeTypeService } from './joke-type.service';

@Controller('joke-types')
export class JokeTypeController {
  constructor(private readonly jokeService: JokeTypeService) {}

  @Get('all')
  getRandomJoke() {
    return this.jokeService.getAllJokeTypes();
  }
}
