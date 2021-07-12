import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  loginForm : FormGroup ;
  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      username : ["",Validators.required],
      password : ["",[Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]]
    }

    )
  }

}
