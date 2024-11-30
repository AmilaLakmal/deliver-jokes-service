import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Joke } from '../jokes/joke.entity';
import { BaseEntity } from 'src/common/entities/base.entity';

@Entity('joke_types')
export class JokeType extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Joke, (joke) => joke.type)
  jokes: Joke[];
}
