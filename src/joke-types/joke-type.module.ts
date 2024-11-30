import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokeType } from '../joke-types/joke-type.entity';
import { JokeTypeController } from './joke-type.controller';
import { JokeTypeService } from './joke-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([JokeType])],
  controllers: [JokeTypeController],
  providers: [JokeTypeService],
})
export class JokeTypesModule {}
