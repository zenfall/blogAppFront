import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { HomeComponent } from './home/home.component';
import { InlayoutComponent } from './inlayout/inlayout.component';
import { LoginComponent } from './login/login.component';
import { MesArticlesComponent } from './mes-articles/mes-articles.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { ModifierUserComponent } from './modifier-user/modifier-user.component';
import { RegisterComponent } from './register/register.component';
import { TousLesArticlesComponent } from './tous-les-articles/tous-les-articles.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'inscription', component: RegisterComponent  }

  ,
  {
    path: "main",
    component: InlayoutComponent,
    children: [
 
  { path: 'accueil', component: HomeComponent  },
  { path: 'ajout', component: AjouterArticleComponent  },
  { path: 'mes-articles', component: MesArticlesComponent  },
  { path: 'tous-les-articles', component: TousLesArticlesComponent  },
  { path: "mod-article/:id", component: ModifierArticleComponent },
  { path: "mod-user", component: ModifierUserComponent } ]

}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
