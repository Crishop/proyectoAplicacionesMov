import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClimaPage } from './clima.page';

const routes: Routes = [
  {
    path: '',
    component: ClimaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClimaPageRoutingModule {}
