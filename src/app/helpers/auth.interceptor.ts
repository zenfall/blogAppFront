import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


const TOKEN_HEADER_KEY = 'Authorization';

 
@Injectable({
    providedIn: 'root'
  })
export class AuthInterceptor implements HttpInterceptor {
 
    constructor(public token: TokenStorageService,public router: Router) { }
   
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//let idToken = JSON.parse(localStorage.getItem('infosUsers'));

if (this.token.getToken()) {
//idToken = idToken.token;
const cloned = req.clone({headers: req.headers.set('Authorization','Bearer ' + this.token.getToken())
});

return next.handle(cloned).pipe(
  map((event) => {
    if (event instanceof HttpResponse) {

    }
    return event;
  }),
  catchError(error => {
    console.log('Error response status: ', error.status);
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401 || error.status === 403) {
        this.router.navigateByUrl('login');
      }

    }


    return throwError(error);
  })
);


} else {
return next.handle(req);
}
}
}