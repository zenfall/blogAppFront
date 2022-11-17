import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  httpHeaders = new HttpHeaders();
  private BASE_URL = `${environment.getBaseUrl()}/api/v1/articles`;

  constructor(private http: HttpClient) { 
    this.httpHeaders.set("Content-Type", "application/json");
    this.httpHeaders.set("Accept", "application/json");
  }

  enregistrerArticle(article:any): Observable<any> {
    return this.http.post(this.BASE_URL + '/createArticle', article, 
    { headers: this.httpHeaders });
  }

  listeArticle(): Observable<any> {
    return this.http.get(this.BASE_URL + '/getAllArticle',  
    { headers: this.httpHeaders });
  }

  articleById(id:any): Observable<any> {
    const url = `${this.BASE_URL}/getArticleById/${id}`;
    return this.http.get(url, { headers: this.httpHeaders });
  }

  articleByUserId(): Observable<any> {
    const url = `${this.BASE_URL}/getArticleByUserId`;
    return this.http.get(url, { headers: this.httpHeaders });
  }

  modArticle(form:any,id:any): Observable<any> {
    const url = `${this.BASE_URL}/mod-article/${id}`;
    return this.http.put(url,form, { headers: this.httpHeaders });
  }
  supprimerArticle(id:any): Observable<any> {
    const url = `${this.BASE_URL}/supprimer/${id}`;
    return this.http.delete(url, { headers: this.httpHeaders });
  }


}
