import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Decorator : add functionality to class
@Module({
  imports: [],
  controllers: [AppController], // like router in Express
  providers: [AppService],
})
export class AppModule {}
