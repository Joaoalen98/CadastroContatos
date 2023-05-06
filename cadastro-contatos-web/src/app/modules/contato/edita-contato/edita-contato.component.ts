import { Component } from '@angular/core';
import { Contato } from 'src/app/interfaces/contato';
import { ContatosService } from 'src/app/services/api-contatos/contatos.service';

@Component({
  selector: 'app-edita-contato',
  templateUrl: './edita-contato.component.html',
  styleUrls: ['./edita-contato.component.scss']
})
export class EditaContatoComponent {
  erro: boolean = false;
  erroMsg: string = "";

  carregando: boolean = true;
  contato!: Contato;

  constructor(contatoService: ContatosService) {
    contatoService.obterContatoPorId()
      .subscribe({
        next: (cont) => {
          this.contato = cont;
        },
        error: (err) {

        }
      })
  }
}
