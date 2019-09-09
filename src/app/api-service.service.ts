import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(public http : HttpClient) {
  this.baseUrl = "https://api.themoviedb.org/3";
  this.apiKey = "b6e974e18e53b8a8bfb9e9827e149190"

   }

  getOverview(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/movie/550?api_key=${this.apiKey}`)
  }

  getPopular(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/movie/popular?page=1&api_key=${this.apiKey}&language=en-US&page=1`)
  }







}
