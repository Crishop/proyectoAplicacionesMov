import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearAlumnoPage } from './crear-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: CrearAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearAlumnoPageRoutingModule {}
