import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RawArticle } from '../models/rawArticle';

@Injectable()
export class ArticleService {

  url_local  = "http://localhost:3000/articles/"; //permission denied 127.0.0.1:3000 (pc pro)
  url_pc     = "http://192.168.0.20:8080/articles/"; 
  url_online = "https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/TP2_VERRIERE/articles/";

  constructor(private http : HttpClient) {}

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url_local);
    // return this.http.get<Article[]>(this.url_online);
    // return this.http.get<Article[]>(this.url_pc);
  }

  public getArticle(id:number): Observable<Article> {
    return this.http.get<Article>(this.url_local+`${id}`);
    // return this.http.get<Article>(this.url_online+`${id}`);
    // return this.http.get<Article>(this.url_pc+`${id}`);
  }

  public deleteArticle(id:number): Observable<void> {
    return this.http.delete<void>(this.url_local+`${id}`);
    // return this.http.delete<void>(this.url_online+`${id}`);
    // return this.http.delete<void>(this.url_pc+`${id}`);
  }

  public addArticle(article : RawArticle): Observable<Article> {
    return this.http.post<Article>(this.url_local, article);
    // return this.http.post<Article>(this.url_online, article);
    // return this.http.post<Article>(this.url_pc, article);
  }

}
