import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobaldataService } from 'src/app/services/globaldata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    if(!GlobaldataService.isLogged){
      this.router.navigate(['/login']);
    }
  }

}
