import { Component } from '@angular/core';
import { Contato } from 'src/app/interfaces/contato';
import { ContatosService } from 'src/app/services/api-contatos/contatos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  erro: boolean = false;
  erroMensagem: string = "";
  carregando: boolean = true;
  contatos: Contato[] = [];

  constructor(private contatosService: ContatosService) {
    contatosService.obterContatos()
      .subscribe({
        next: (conts) => {
          this.contatos = conts;
          this.carregando = false;
        },
        error: (err) => {
          this.erro = true;
          this.erroMensagem = err;

          this.carregando = false;
        }
      });
  }
}
