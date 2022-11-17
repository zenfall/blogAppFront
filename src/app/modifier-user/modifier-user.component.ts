import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.css']
})
export class ModifierUserComponent implements OnInit {

  errorMessage:any;
  registerFailed=false;
  message:any;
  registerSuccessed=false;
  user:any;
  role:any;

  userRegiterForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    username: [{value: '', disabled: true},Validators.required],
    
    roles: [{value: '', disabled: true},Validators.required]
  });

  constructor(private fb: FormBuilder, private userService: UserService) { }
 

  ngOnInit(): void {
    
    this.userService.getUserLogin().subscribe(
      data => {
       console.log(data.roles[0].name);

       if(data.roles[0].name == 'ROLE_ADMIN'){
        console.log("ici")
        this.role='ADMIN';
        this.user=data;
        console.log(this.user)
       }else{
        if(data.roles[0].name == 'ROLE_USER'){
          this.role='USER';
          this.user=data;
        }
       }
       
      }
    )

  }

  onSubmit() {
    
    console.log(this.userRegiterForm.value);
    this.userService.modifierUser(this.userRegiterForm.value).subscribe(
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
