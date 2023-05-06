import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contatos',
    pathMatch: 'full'
  },
  {
    path: 'contatos',
    loadChildren: () => import('./modules/contato/contato.module').then(x => x.ContatoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
