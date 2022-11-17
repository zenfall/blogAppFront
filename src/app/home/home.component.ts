import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public tokenStorage: TokenStorageService,public router: Router) { }
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  isConnected: Boolean = false;

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isConnected =true;
  }
  }

  logOut() {
    this.isLoggedIn = false;
    this.roles = [];
    this.tokenStorage.signOut();
    // this.reloadPage();
    this.ngOnInit();      
    this.isConnected = false; 
  
    this.router.navigate(['/login'], { skipLocationChange: false });
}

}
