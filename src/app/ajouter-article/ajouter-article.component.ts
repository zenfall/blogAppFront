import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {
  errorMessage='';
  isFailed=false;
  isAdded=false;
  articleForm = this.fb.group({
   
    title: ['',Validators.required],
    content: ['',Validators.required],
    
  });

  constructor(private fb: FormBuilder, private articleService: ArticlesService
    ,private tokenStorage: TokenStorageService
    ,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.articleForm);
    this.articleService.enregistrerArticle(this.articleForm.value).subscribe(
      data =>{
        console.log(data);
        this.isAdded=true;
        this.router.navigateByUrl('main/mes-articles'); 
    },
    err => {
      this.errorMessage = err.error;
      console.log( this.errorMessage)
      
      this.isFailed = true;
    });
    
  }

}
