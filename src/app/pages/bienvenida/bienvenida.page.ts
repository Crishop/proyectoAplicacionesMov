import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from './../../services/auth.service'
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  constructor(
    private router: Router,
    private auth: AuthService
    ) { }

  user$ = this.auth.estadoUsuario$.pipe(
    filter(state => state ? true : false)
  );
  ngOnInit() {}

}
