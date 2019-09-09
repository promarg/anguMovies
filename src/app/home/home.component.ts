import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { PopularLayout } from '../models/popularList'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  title = "AnguMovies";
  
  overview: string;
  PopularList: PopularLayout = new PopularLayout();
  
  
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

  };

}
