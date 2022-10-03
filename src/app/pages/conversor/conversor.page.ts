import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobaldataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    if(!GlobaldataService.isLogged){
      this.router.navigate(['/login']);
    }
  }

}
