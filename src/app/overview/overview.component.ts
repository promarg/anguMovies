import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from 'app/services/tmdb-api.service';
import { Movies, Shows, Movie, Show } from 'app/models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  popularMovies: Movies = new Movies();
  popularShows: Shows = new Shows();

  baseUrl = "https://image.tmdb.org/t/p/";
  fileSize = "w200/";
  
  constructor(public tmdbApiService: TmdbApiService) { }

  ngOnInit() {
    this.tmdbApiService.getPopularMovies().subscribe((movies: Movies) =>{
      this.popularMovies = movies;
    });

    this.tmdbApiService.getPopularShows().subscribe((shows: Shows) =>{
      this.popularShows = shows;
    });
  }

  getPoster(media: Movie|Show) {
    if (media) return this.baseUrl + this.fileSize + media.poster_path;
  }
}
