import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// Decorator : add functionality to class
@Module({
  imports: [MoviesModule],
  controllers: [AppController], // like router in Express
  providers: [],
})
export class AppModule {}
