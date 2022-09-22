import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversorPage } from './conversor.page';

const routes: Routes = [
  {
    path: '',
    component: ConversorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversorPageRoutingModule {}
