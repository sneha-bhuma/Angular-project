import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  news:any[]=[];
  constructor(private newsService: NewsService){}
  ngOnInit(): void {
    this.newsService.fetchData().then(data => {
      this.news = data["articles"];
      console.log(this.news);
    }); 
  }

  // getNewsByArticle() {
  //   this.newsService.fetchData().then((data) => {
      
  //     this.news = data["articles"];
  //     console.log(this.news);
  //   });
  // }
}