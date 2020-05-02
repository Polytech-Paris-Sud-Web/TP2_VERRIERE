import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import { ArticleService } from '../services/article.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

	private _articles: Article[];
	_nbResults: number;

	constructor(private articleService: ArticleService) {}

	ngOnInit() {
		this.getArticles();
	}

	articles(): Article[] {
		return this._articles;
	}

	getArticles() {
		this.articleService.getArticles().subscribe(articles => {
			console.log(articles)
			this._articles = articles;
			this._nbResults = this._articles.length;
		})
	}

	delete({id}: Article) {
		console.log("[Delete] id=", id);
		this.articleService.deleteArticle(id).subscribe(() => {
			swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Your article has been removed',
				showConfirmButton: false,
				timer: 1500
			})
			this.getArticles();
		});
  }

	search() {
		let title = document.getElementById("searchTitle")['value'];
		let content = document.getElementById("searchContent")['value'];
		let authors = document.getElementById("searchAuthors")['value'];

		if (title == "" && content == "" && authors == "") {
			this.getArticles();
		} else {
			this.articleService.getArticles().subscribe((articles) => {
				this._articles = articles.filter(elmnt => {
					if ((title != "" && elmnt.title.includes(title)) || (content != "" && elmnt.content.includes(content)) || (authors != "" && elmnt.authors.includes(authors))) {
						return elmnt;
					}
				});
				this._nbResults = this._articles.length;
			})
		}
	}

}