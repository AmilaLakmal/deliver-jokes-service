import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Joke } from '../jokes/joke.entity';

@Entity('joke_types')
export class JokeType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Joke, (joke) => joke.type)
  jokes: Joke[];
}
