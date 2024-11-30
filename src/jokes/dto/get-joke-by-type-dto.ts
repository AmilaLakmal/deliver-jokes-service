import { IsNotEmpty, IsString } from 'class-validator';

export class GetJokeByTypeDto {
  @IsString({ message: 'Type ID must be a string' })
  @IsNotEmpty({ message: 'Type ID is requiredd' })
  typeId: string;
}
