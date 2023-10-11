import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FilmController } from './film/film.controller';
import { FilmService } from './film/film.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [FilmController],
  providers: [FilmService],
})
export class AppModule {}
