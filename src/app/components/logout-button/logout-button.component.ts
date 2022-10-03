import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobaldataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  cerrarSesion(){
    if(GlobaldataService.isLogged){
      GlobaldataService.isLogged = false;
      GlobaldataService.userObject = '';
      this.router.navigate(['/login']);
    }
  }

}
