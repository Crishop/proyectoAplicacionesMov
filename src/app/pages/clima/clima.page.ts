import { HttpClient } from '@angular/common/http';
import { Component, OnInit,} from '@angular/core';
import { environment } from './../../../environments/environment';
import { Geolocation } from '@capacitor/geolocation'

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  coordenadas :any
  latitud :any
  longitud :any
  weatherTemp = {}
  ubicacion = ""

  constructor(
    public httpClient : HttpClient
  ) {
    this.fetchLocation();
  }

  async fetchLocation(){
    const location = await Geolocation.getCurrentPosition();
      this.coordenadas = location['coords'];
      this.latitud = this.coordenadas['latitude'];
      this.longitud = this.coordenadas['longitude'];
      this.cargarDatos();
  }

  cargarDatos(){
    this.httpClient.get(`${API_URL}/weather?lat=${this.latitud}&lon=${this.longitud}&appid=${API_KEY}&units=metric`)
    .subscribe(results => {
       console.log(results)
       this.weatherTemp = results['main']
       this.ubicacion = results["name"]
       console.log(this.ubicacion)
       console.log(this.weatherTemp)
    })
  }

  ngOnInit() {
  }

}
