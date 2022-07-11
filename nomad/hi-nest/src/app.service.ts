import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Whis!';
  }
  getHi(): string {
    return 'Hi Nest';
  }
}
