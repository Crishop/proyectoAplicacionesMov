import { Component } from '@angular/core';
import { AuthService} from './services/auth.service'
import { Router} from '@angular/router'
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bienvenida', url: 'bienvenida', icon: 'home' },
    { title: 'About', url: 'about', icon: 'people' },
    { title: 'Conversor', url: 'conversor', icon: 'qr-code' },
    { title: 'Conversor Monedas', url: 'monedas', icon:'construct'},
    { title: '404', url: 'error', icon: 'construct' },
  ];

  user$ = this.auth.estadoUsuario$.pipe(
    filter(state => state ? true : false)
  );
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  cerrarSesion(){
    this.auth.logout();
    this.router.navigate(['/login'])
  }
}
