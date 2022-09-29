import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobaldataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  pageTitle = 'Bienvenida';
  isNotHome = false;
  username = 'Garupa';

  constructor(private router: Router) { }

  ngOnInit() {
      
  }

  ionViewWillEnter(){
    if(GlobaldataService.isLogged){
      this.username = GlobaldataService.userObject;
    }
    else{
      this.router.navigate(['/login']);
    }  
  }

}
