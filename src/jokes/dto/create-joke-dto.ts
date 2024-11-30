import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateJokeDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsInt()
  typeId: number;
}
