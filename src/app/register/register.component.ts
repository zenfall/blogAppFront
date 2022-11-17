import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  userRegiterForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    username: ['',Validators.required],
    password: ['',Validators.required],
    roles: ['',Validators.required]
  });

  constructor(private fb: FormBuilder, private userService: UserService) { }
  errorMessage:any;
  registerFailed=false;
  message:any;
  registerSuccessed=false;

  ngOnInit(): void {
  }

  onSubmit() {
    
    console.log(this.userRegiterForm.value);
    this.userService.inscription(this.userRegiterForm.value).subscribe(
      data => {
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
}
