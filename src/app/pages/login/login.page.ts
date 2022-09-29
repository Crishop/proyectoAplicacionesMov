import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { GlobaldataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {

  pageTitle = 'Login';
  isNotHome = true;

  //Model
  user : any = {
    email: '',
    password : ''
  }
  
  field: string = '';

  constructor(private toastCtrl: ToastController, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  login(){


    if(this.validateModel(this.user)){
      this.showLoading();
      GlobaldataService.isLogged = true;
      GlobaldataService.userObject = this.user.email;
      this.presentToast('Bienvenido ' + this.user.email);
      setTimeout(() => {
        this.router.navigate(['/bienvenida']);

      }, 2000);
    }
    else{
      this.presentToast('Debes ingresar: ' + this.field);
    }
  }

  validateModel(model: any){
    for(var[key,value] of Object.entries(model)){
      if(value == ''){
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:duration?duration:2000
    });
    toast.present();
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({

      message: 'Iniciando sesión..',
      duration: 1500,
      //spinner: 'lines',
      
    });
    loading.present();
}

}