import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// getting url and return function(service)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // why need service??
    //  because of deviding business logic
    return this.appService.getHello();
  }

  // like app.get in Express
  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
}
