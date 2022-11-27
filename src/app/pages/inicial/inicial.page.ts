import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  }

