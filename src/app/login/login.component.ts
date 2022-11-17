import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
   
    loginForm = this.fb.group({
   
    username: ['',Validators.required],
    password: ['',Validators.required],
    
  });

  constructor( private fb: FormBuilder, private userService: UserService
    ,private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.jwt);
        console.log(this.tokenStorage.getToken())
        this.tokenStorage.saveUser(data);
        console.log(this.tokenStorage.getUser())

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

        console.log(this.roles);
        //this.reloadPage();
        this.router.navigateByUrl('main');
    },
    err => {
      this.errorMessage = err.error;
      console.log( this.errorMessage)
      
      this.isLoginFailed = true;
    });

  }

  reloadPage(): void {
    window.location.reload();
  }

}
