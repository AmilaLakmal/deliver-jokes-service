import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokesModule } from './jokes/jokes.module';

@Module({
  imports: [JokesModule],
})
export class AppModule {}
