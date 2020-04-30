import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Article} from '../models/article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  @Output() deletedArticle : EventEmitter<Article> = new EventEmitter();

  constructor(private route: ActivatedRoute, private articleService : ArticleService) {}

  ngOnInit() {
    this.route.params.subscribe( params => {
      if (params && params['id']){
        this.articleService.getArticle(params['id']).subscribe(fetchedArticle => this.article = fetchedArticle);
      }
    });
  }

  delete(){
    console.log("delete", this.article)
    this.deletedArticle.emit(this.article);
  }

}
