import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    form = this. formBuilder. group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
    constructor(
      private formBuilder : FormBuilder,
      private auth: AuthService,
      private router: Router
    ) { }
  
    ngOnInit() {
    }
    //Validar formulario 
    register(){
      if(this.form.valid){
        const {email, password} =this.form.getRawValue();
        this.auth.register(email,password)
        .then(() => {
          this.router.navigate(['/bienvenida'])
        }).catch(error => {
          alert("Usuario ya registrado")
          console.error(error)
        });
      }else{
        this.form.markAllAsTouched();
      }
    }
  }
