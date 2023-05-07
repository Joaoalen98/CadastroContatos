import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'usuario',
    pathMatch: 'full',
  },
  {
    path: 'contatos',
    loadChildren: () => import('./modules/contato/contato.module').then(x => x.ContatoModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario',
    loadChildren: () => import('./modules/usuario/usuario.module').then(x => x.UsuarioModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
