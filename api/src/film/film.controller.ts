import { Controller, Get, Query } from '@nestjs/common';
import { FilmService } from './film.service';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get()
  async getFilms(@Query('title') title: string): Promise<any> {
    return await this.filmService.getFilms(title);
  }
}
