import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticationService } from '../../autentication.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private authService: AutenticationService,
    private route:Router
  ) 
  {
    this.loginForm = this.builder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });  
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.loginForm.controls['username'].value,this.loginForm.controls['password'].value).subscribe(
      () =>{
        this.route.navigateByUrl('/core/home');
      });
  }
}
