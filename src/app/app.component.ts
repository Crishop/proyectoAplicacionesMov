import { Component } from '@angular/core';
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
    { title: '404', url: 'error', icon: 'construct' }
  ];
  constructor() {}
}
