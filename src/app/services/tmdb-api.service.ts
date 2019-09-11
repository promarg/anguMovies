import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movies } from 'app/models/movies.model';
import { Shows } from 'app/models/shows.model';
import { Movie } from 'app/models/movie.model';

@Injectable({
  providedIn: 'root'
})

export class TmdbApiService {
  private baseUrl: string;
  private apiKey: string;
  private language: string;
  private region: string;

  constructor(public http : HttpClient) {
    this.baseUrl = "https://api.themoviedb.org/3";
    this.apiKey = "b6e974e18e53b8a8bfb9e9827e149190"
  }

  getMovie(): Observable<any>{
    return this.http.get<Movie>(`${this.baseUrl}/movie/550?api_key=${this.apiKey}`)
  }

  getPopularMovies(): Observable<Movies>{
    return this.http.get<Movies>(`${this.baseUrl}/movie/popular?page=1&api_key=${this.apiKey}&language=en-US&page=1`)
  }

  getPopularShows(): Observable<Shows>{
    return this.http.get<Shows>(`${this.baseUrl}/tv/popular?api_key=${this.apiKey}&language=en-US&page=1`)
  }
}
