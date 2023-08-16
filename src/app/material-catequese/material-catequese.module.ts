import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialCatequesePageRoutingModule } from './material-catequese-routing.module';

import { MaterialCatequesePage } from './material-catequese.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialCatequesePageRoutingModule
  ],
  declarations: [MaterialCatequesePage]
})
export class MaterialCatequesePageModule {}
