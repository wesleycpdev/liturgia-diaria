import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'liturgia',
    loadChildren: () => import('./liturgia/liturgia.module').then( m => m.LiturgiaPageModule)
  },
  {
    path: '',
    redirectTo: 'liturgia',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
