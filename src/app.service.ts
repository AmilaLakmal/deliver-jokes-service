import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the Deliver Jokes Microservice! Ready to make you laugh!';
  }
}
