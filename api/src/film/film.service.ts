import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { OmdbResponse } from './dto/OmdbResponse';

@Injectable()
export class FilmService {
  constructor() {}
  private urlBase = 'http://www.omdbapi.com/?';
  private apiKey = process.env.OMDB_API_KEY;

  async getFilms(title: string): Promise<OmdbResponse> {
    const req = await fetch(`${this.urlBase}t=${title}&apikey=${this.apiKey}`);
    const res = await req.json();
    if (res.Response === 'False') {
      throw new UnprocessableEntityException(res.Error);
    }
    return res;
  }
}
