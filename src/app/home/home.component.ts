import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from 'app/services/tmdb-api.service';
import { Movies, Shows, Movie, Show } from 'app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  title: String = "AnguMovies";
  overview: string;
  
  popularMovies: Movies = new Movies();
  popularShows: Shows = new Shows();
  
  baseUrl = "https://image.tmdb.org/t/p/";
  fileSize = "w500/";
  
  constructor(public tmdbApiService: TmdbApiService) { }

  ngOnInit() {
    this.tmdbApiService.getMovie().subscribe((movie: Movie) =>{
      this.overview = movie.overview;
    });

    this.tmdbApiService.getPopularMovies().subscribe((movies: Movies) =>{
      this.popularMovies = movies;
    });

    this.tmdbApiService.getPopularShows().subscribe((shows: Shows) =>{
      this.popularShows = shows;
    });
  };

  getPoster(media: Movie|Show) {
    if (media) return this.baseUrl + this.fileSize + media.poster_path;
  }
}
