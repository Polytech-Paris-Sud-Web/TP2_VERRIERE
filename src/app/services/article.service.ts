import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { RawArticle } from '../models/rawArticle';

@Injectable()
export class ArticleService {

  constructor(private http : HttpClient) {}

  public getArticles(): Observable<Article[]> {
    // return this.http.get<Article[]>("http://localhost:8080/articles"); 
    // Mon pc d'entreprise refuse la connexion sur le localhost ...
    return this.http.get<Article[]>("http://192.168.0.20:8080/articles");
  }

  public getArticle(id:number): Observable<Article> {
    return this.http.get<Article>(`http://192.168.0.20:8080/articles/${id}`);
  }

  public deleteArticle(id:number): Observable<void> {
    return this.http.delete<void>(`http://192.168.0.20:8080/articles/${id}`);
  }

  public addArticle(article : RawArticle): Observable<Article> {
    return this.http.post<Article>("http://192.168.0.20:8080/articles/", article);
  }

}
