import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom, lastValueFrom, map } from 'rxjs';

@Injectable()
export class TmdbService {
    constructor(private readonly httpService: HttpService) {}
    private readonly apiUrl = 'https://api.themoviedb.org/3';
    private readonly apiKey = 'api_key=03c2ba90603897e46afbaff648e6fd60';
    private readonly path = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

    getMovies2(): string {
        return "movies";
    }

    async getMovies() {
        const url = `${this.apiUrl}/${this.path}&${this.apiKey}`;
        const result = await firstValueFrom(
            this.httpService.get(url).pipe(map((response) => response.data)),
          );
        console.log(result);
        return result;
    }
    
    //https://api.themoviedb.org/3/movie/550?api_key=03c2ba90603897e46afbaff648e6fd60
    async getMovies3() {
        const url = `${this.apiUrl}/${this.path}&${this.apiKey}`;

        //  Get TodoTypicodeResponse using axios
        const response = await firstValueFrom(
            // Add the type of the response
            //this.httpService.get<AxiosResponse<TodoTypicodeResponse>>(
            this.httpService.get(url,
                // {
                //     headers: {
                //         Accept: 'application/json',
                //         Authorization: 'Bearer 03c2ba90603897e46afbaff648e6fd60',
                //     },
                // }
            ),
        ).catch((err) => {
            console.log(err);
        });
        return response
    }
    // async getWeatherForecasts() {
    //     const url = 'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json';
    //     const { data } = await firstValueFrom(this.httpService.get(url));
    //     return data;
    //  }
}

//03c2ba90603897e46afbaff648e6fd60
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2MyYmE5MDYwMzg5N2U0NmFmYmFmZjY0OGU2ZmQ2MCIsInN1YiI6IjY1MjI1ZDg0NzQ1MDdkMDBjNTdjNTA5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pSS7wTBGmCIX3rpSeGIa3vhSeF4pWGX4RvFBbgzaLKM