import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> brayanPe

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

<<<<<<< HEAD
  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {this.showLoading()}
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
}
=======
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
 
  }
>>>>>>> brayanPe


}
