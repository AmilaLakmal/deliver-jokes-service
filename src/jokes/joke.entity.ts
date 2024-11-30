import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { JokeType } from '../joke-types/joke-type.entity';

@Entity('jokes')
export class Joke {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => JokeType, (jokeType) => jokeType.jokes, { nullable: false })
  type: JokeType;
}
