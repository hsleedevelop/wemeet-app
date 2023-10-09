import { Controller, Get } from '@nestjs/common';
import { TmdbService } from './tmdb.service';

@Controller('movie')
export class TmdbController {
    constructor(private readonly tmdbService: TmdbService) {}

    @Get()
    async getMovies() {
        return this.tmdbService.getMovies();
    }
}
