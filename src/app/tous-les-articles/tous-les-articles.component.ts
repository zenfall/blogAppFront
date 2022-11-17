import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-tous-les-articles',
  templateUrl: './tous-les-articles.component.html',
  styleUrls: ['./tous-les-articles.component.css']
})
export class TousLesArticlesComponent implements OnInit {

  articleList:any
  constructor(private articleService: ArticlesService
               ,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
   this.articleService.listeArticle().subscribe(
    data => {
      console.log(data);
      this.articleList =data;
    }
   )

  }

}
