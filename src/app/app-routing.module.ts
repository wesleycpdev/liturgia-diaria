import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'liturgia',
    loadChildren: () => import('./liturgia/liturgia.module').then( m => m.LiturgiaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'material-catequese',
    loadChildren: () => import('./material-catequese/material-catequese.module').then( m => m.MaterialCatequesePageModule)
  },
  {
    path: 'arquivos',
    loadChildren: () => import('./arquivos/arquivos.module').then( m => m.ArquivosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
