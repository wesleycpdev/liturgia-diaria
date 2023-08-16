import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialCatequesePage } from './material-catequese.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialCatequesePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialCatequesePageRoutingModule {}
