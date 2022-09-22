import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidaPage } from './bienvenida.page';

const routes: Routes = [
  {
    path: '',
    component: BienvenidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenidaPageRoutingModule {}
