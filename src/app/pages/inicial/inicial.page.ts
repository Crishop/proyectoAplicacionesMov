import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobaldataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(!GlobaldataService.isLogged){
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000);
    }
    else{
      this.router.navigate(['/bienvenida']);
    }
 
  }


}
