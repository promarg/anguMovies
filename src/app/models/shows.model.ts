import { Show } from './show.model';

export class Shows {
    public page: number;
    public total_pages: number;
    public total_results: number;
    public results: Array<Show>;
}