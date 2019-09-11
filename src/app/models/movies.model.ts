import { Movie } from './movie.model';

export class Movies {
   public page: number;
   public total_pages: number;
   public total_results: number;
   public results: Array<Movie>;
}


