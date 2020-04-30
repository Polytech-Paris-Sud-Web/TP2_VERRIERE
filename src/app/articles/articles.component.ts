import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private _articles : Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.getArticles();
  }

  articles(): Article[] {
    return this._articles;
  }
  
  getArticles(){
    this.articleService.getArticles().subscribe(articles => {
      console.log(articles)
      this._articles = articles;
    })
  }

  delete({id} : Article){
    console.log("[Delete] id=",id);
    this.articleService.deleteArticle(id).subscribe(()=>{
      this.getArticles();
    });
  }

  createdArticle(article: Article){
    this.getArticles();
  }

}
