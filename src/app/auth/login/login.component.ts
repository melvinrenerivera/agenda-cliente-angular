import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  form! : FormGroup;
  error! : string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      username : [,[Validators.required]],
      password : [,[Validators.required]]
    })
  }

  login(){
    console.log('hello');
    this.authService.login(this.form.value)
    .subscribe(r =>{
      this.router.navigate(["/"]);
    },error => this.error = "Usuario y contrasenia invalidos");
  }

}
 