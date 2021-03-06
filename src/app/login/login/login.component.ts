import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required]),
  }); 
  }


  onClick() {
    // console.log(this.loginForm.value)
        this.router.navigate(['dashboard'])
  }
  
}
