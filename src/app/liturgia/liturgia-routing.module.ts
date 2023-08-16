import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiturgiaPage } from './liturgia.page';

const routes: Routes = [
  {
    path: '',
    component: LiturgiaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiturgiaPageRoutingModule {}
