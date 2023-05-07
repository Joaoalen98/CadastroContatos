import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaContatoComponent } from './pages/edita-contato/edita-contato.component';
import { HomeComponent } from './pages/home/home.component';
import { NovoContatoComponent } from './pages/novo-contato/novo-contato.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'contatos/novo-contato',
    component: NovoContatoComponent,
  },
  {
    path: 'contatos/edita-contato/:id',
    component: EditaContatoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
