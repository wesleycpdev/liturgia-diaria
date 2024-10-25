import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OracoesPageRoutingModule } from './oracoes-routing.module';

import { OracoesPage } from './oracoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OracoesPageRoutingModule
  ],
  declarations: [OracoesPage]
})
export class OracoesPageModule {}
