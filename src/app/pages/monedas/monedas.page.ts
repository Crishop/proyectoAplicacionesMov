import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.page.html',
  styleUrls: ['./monedas.page.scss'],
})
export class MonedasPage implements OnInit {

  dolar ={}
  uf ={}
  ivp ={}
  dolar_intercambio ={}
  euro ={}
  utm ={}
  bitcoin ={}

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://mindicador.cl/api')
    .subscribe(res => {
      this.dolar = res.dolar;
      this.uf = res.uf;
      this.ivp = res.ivp;
      this.dolar_intercambio = res.dolar_intercambio;
      this.euro = res.euro;
      this.utm = res.utm;
      this.bitcoin = res.bitcoin;

    })
  }

}
