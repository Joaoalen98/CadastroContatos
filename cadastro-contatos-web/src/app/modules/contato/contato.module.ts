import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { EditaContatoComponent } from './pages/edita-contato/edita-contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContatoComponent } from './components/form-contato/form-contato.component';
import { HomeComponent } from './pages/home/home.component';
import { NovoContatoComponent } from './pages/novo-contato/novo-contato.component';


@NgModule({
  declarations: [
    HomeComponent,
    EditaContatoComponent,
    NovoContatoComponent,
    FormContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ContatoModule { }
