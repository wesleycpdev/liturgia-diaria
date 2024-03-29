import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialCatequesePageRoutingModule } from './material-catequese-routing.module';

import { MaterialCatequesePage } from './material-catequese.page';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialCatequesePageRoutingModule,
    PdfViewerModule
  ],
  declarations: [MaterialCatequesePage]
})
export class MaterialCatequesePageModule {}
