import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonedasPage } from './monedas.page';

const routes: Routes = [
  {
    path: '',
    component: MonedasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonedasPageRoutingModule {}
