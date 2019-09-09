import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { PopularLayout } from '../models/popularList';
import { PopularLayoutTv } from '../models/popularListTv';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  PopularList: PopularLayout = new PopularLayout();
  PopularListTv: PopularLayoutTv = new PopularLayoutTv();

  base_url = "https://image.tmdb.org/t/p/";
  file_size = "w200/";

  
  constructor(public apiMovies: ApiServiceService) { }

  ngOnInit() {
    this.apiMovies.getPopular().subscribe(result => {
      this.PopularList = result;
    })


    this.apiMovies.getTvPopular().subscribe(result =>{
      this.PopularListTv = result;
    })

  }

}
