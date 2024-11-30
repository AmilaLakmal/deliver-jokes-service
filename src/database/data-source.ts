import { JokeType } from 'src/joke-types/joke-type.entity';
import { Joke } from 'src/jokes/joke.entity';
import { DataSource } from 'typeorm';

import * as dotenv from 'dotenv';

dotenv.config();

export const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Joke, JokeType],
  synchronize: false,
  logging: true,
  migrations: ['src/db-setup/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
