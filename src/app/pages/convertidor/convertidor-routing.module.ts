import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvertidorPage } from './convertidor.page';

const routes: Routes = [
  {
    path: '',
    component: ConvertidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertidorPageRoutingModule {}
