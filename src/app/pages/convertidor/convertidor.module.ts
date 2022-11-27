import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertidorPageRoutingModule } from './convertidor-routing.module';

import { ConvertidorPage } from './convertidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertidorPageRoutingModule
  ],
  declarations: [ConvertidorPage]
})
export class ConvertidorPageModule {}
