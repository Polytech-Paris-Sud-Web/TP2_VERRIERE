import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RawArticle } from '../models/rawArticle';
import { ArticleService } from '../services/article.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;

  
  @Output()
  createdArticle : EventEmitter<RawArticle> = new EventEmitter();

  constructor(private fb: FormBuilder, private articleService : ArticleService, private router: Router) {
    this.articleForm = this.fb.group({
      title: ['Fake Article', Validators.required ],
      content : ['', Validators.required ],
      authors : ['Dorian V', Validators.required ],
    });
  }

  ngOnInit() {
  }

  createArticle(){
    const formModel = this.articleForm.value;
    const rawArticle : RawArticle = {
      title : formModel.title,
      content : formModel.content,
      authors : formModel.authors
    }
    this.articleService.addArticle(rawArticle).subscribe((article) => {
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your article has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.createdArticle.emit(article);
      setTimeout(() => {
          this.router.navigate(['articles']);
      }, 1750); 
    });
  }
}

