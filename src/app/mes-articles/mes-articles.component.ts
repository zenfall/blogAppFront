import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-mes-articles',
  templateUrl: './mes-articles.component.html',
  styleUrls: ['./mes-articles.component.css']
})
export class MesArticlesComponent implements OnInit {
  articleList:any
  constructor(private articleService: ArticlesService
               ,private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    
   this.tokenStorage.getUser();

   console.log(this.tokenStorage.getToken()+"token");

   this.articleService.articleByUserId().subscribe(
    data => {
      console.log(data);
      this.articleList =data;
    }
   )

  }



}
