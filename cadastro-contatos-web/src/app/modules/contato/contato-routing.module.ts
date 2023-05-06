import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';
import { EditaContatoComponent } from './edita-contato/edita-contato.component';

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
