import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  _url: string = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=a4952344a90f452fade8652b6c81085d';
  

  constructor(private http: HttpClient) { }

  fetchData(){
    // return this.http.get(this._url);
    return fetch(this._url).then((res) => res.json());
  }
 
  // getNewsByArticle() {
  //   return fetch(this._url).then((res) => res.json());
  // }
  
}
