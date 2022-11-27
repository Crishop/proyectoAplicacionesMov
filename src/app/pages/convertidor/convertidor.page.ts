import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.page.html',
  styleUrls: ['./convertidor.page.scss'],
})
export class ConvertidorPage implements OnInit {

  dolar ={}
  euro ={}

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://mindicador.cl/api')
    .subscribe(res => {
      this.dolar = res.dolar;
      this.euro = res.euro;
    })
  }

}
