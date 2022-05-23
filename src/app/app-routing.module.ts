import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./core/log-in/log-in.module').then((m) => m.LogInModule),
  },
  {
    path:'acceuil',
    loadChildren:() => import('./core/accueil/accueil.module').then((acceuil)=>acceuil.AccueilModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
