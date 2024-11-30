import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateJokeTypeDto {
  @IsString()
  @IsNotEmpty({ message: 'Joke type name is required' })
  name: string;
}
