import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier-article',
  templateUrl: './modifier-article.component.html',
  styleUrls: ['./modifier-article.component.css']
})
export class ModifierArticleComponent implements OnInit {
  
  article: any;
  idArticle:any;
  errorMessage:any;
  registerFailed=false;
  message:any;
  registerSuccessed=false;
  deleteArticle=false;
  
  articleForm = this.fb.group({
   
    title: ['',Validators.required],
    content: ['',Validators.required],
    
  });
  constructor(private fb: FormBuilder,private route: Router,
     private router: ActivatedRoute, private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.idArticle = this.router.snapshot.params.id;
    this.articleService.articleById( this.idArticle).subscribe(
      data => {
        console.log(data);
        this.article =data;
        console.log(this.article) 
      }
    )
  }

  onSubmit(){
    console.log(this.articleForm);
    this.articleService.modArticle(this.articleForm.value, this.idArticle).subscribe(
      data =>{
        console.log(data);
        this.message = data; 
        this.registerSuccessed = true;
        this.registerFailed = false;
      },
      err => {
        this.errorMessage = err.error;
        console.log(this.errorMessage)
        this.registerFailed = true;
        this.registerSuccessed = false;
      }); 
  }

  supprimer(){
    this.articleService.supprimerArticle(this.idArticle).subscribe(
      data => {
        console.log(data);
       this.deleteArticle=true;
       this.route.navigateByUrl('/main/tous-les-articles');
      },
      err => {
        //this.errorMessage = err.error;
       // console.log(this.errorMessage)
        
      }); 
  }
  

}
