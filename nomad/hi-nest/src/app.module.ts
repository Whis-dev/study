import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// Decorator : add functionality to class
@Module({
  imports: [],
  controllers: [MoviesController], // like router in Express
  providers: [MoviesService],
})
export class AppModule {}
