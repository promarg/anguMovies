import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { PopularLayout } from '../models/popularList'
import { PopularLayoutTv } from '../models/popularListTv'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {


  title = "AnguMovies";
  
  
  overview: string;
  
  PopularList: PopularLayout = new PopularLayout();
  PopularListTv: PopularLayoutTv = new PopularLayoutTv();
  
  base_url = "https://image.tmdb.org/t/p/";
  file_size = "w500/";
  
  constructor(public apiMovies: ApiServiceService) { 
  }

  ngOnInit() {
    this.apiMovies.getOverview().subscribe(result =>{
      this.overview = result.overview;
    });

    this.apiMovies.getPopular().subscribe(result =>{
      this.PopularList = result;

      /* this.id = result.id;
      this.image1 = result.poster_path;
      this.image2 = result.backdrop_path;
      this.popularity = result.popularity;
      this.vote = result.vote_average;
      this.release = result.release_date;
 */
    });

    this.apiMovies.getTvPopular().subscribe(result =>{
      this.PopularListTv = result;
    })



  };

}
