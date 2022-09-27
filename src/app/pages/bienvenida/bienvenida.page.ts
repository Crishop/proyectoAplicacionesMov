import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  pageTitle = 'home';
  isNotHome = false;
  username = 'Garupa';

  constructor() { }

  ngOnInit() {
    if(GlobaldataService.userObject){
      this.username = GlobaldataService.userObject;
    }
    
  }

}
