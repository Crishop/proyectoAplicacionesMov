import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/bienvenida']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicial',
    loadChildren: () => import('./pages/inicial/inicial.module').then( m => m.InicialPageModule)
  },
  {
    path: 'login',
    canActivate:[AuthGuard],
    data:{authGuardPipe : redirectLoggedInToHome},
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    canActivate:[AuthGuard],
    data:{authGuardPipe : redirectLoggedInToHome},
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'bienvenida',
    canActivate:[AuthGuard],
    data:{authGuardPipe : redirectUnauthorizedToLogin},
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'about',
    canActivate:[AuthGuard],
    data:{authGuardPipe : redirectUnauthorizedToLogin},
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'conversor',
    canActivate:[AuthGuard],
    data:{authGuardPipe : redirectUnauthorizedToLogin},
    loadChildren: () => import('./pages/conversor/conversor.module').then( m => m.ConversorPageModule)
  },
  {
    path: 'convertidor',
    canActivate:[AuthGuard],
    data:{authGuardPipe : redirectUnauthorizedToLogin},
    loadChildren: () => import('./pages/convertidor/convertidor.module').then( m => m.ConvertidorPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error/error.module').then( m => m.ErrorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
