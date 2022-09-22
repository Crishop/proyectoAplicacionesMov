import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicialPage } from './inicial.page';

const routes: Routes = [
  {
    path: '',
    component: InicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicialPageRoutingModule {}
