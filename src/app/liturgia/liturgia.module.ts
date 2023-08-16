import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LiturgiaPage } from './liturgia.page';

import { LiturgiaPageRoutingModule } from './liturgia-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiturgiaPageRoutingModule
  ],
  declarations: [LiturgiaPage]
})
export class LiturgiaPageModule {}
