import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { JokeType } from '../joke-types/joke-type.entity';
import { BaseEntity } from 'src/common/entities/base.entity';

@Entity('jokes')
export class Joke extends BaseEntity {
  @Column()
  content: string;

  @ManyToOne(() => JokeType, (jokeType) => jokeType.jokes, { nullable: false })
  type: JokeType;
}
