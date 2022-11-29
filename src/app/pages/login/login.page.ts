import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });
  constructor(
    private formBuilder : FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  //Validar formulario 
  login(){
    if(this.form.valid){
      const {email, password} =this.form.getRawValue();
      this.auth.login(email,password)
        .then(() => {
          this.router.navigate(['/bienvenida'])
        }).catch(error => {
          console.error(error)
          alert("No existe usuario")
        });
    }else{
      this.form.markAllAsTouched();
    }
  }

}
