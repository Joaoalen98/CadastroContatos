import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/interfaces/contato';
import { ContatosService } from 'src/app/services/api-contatos/contatos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  erro: boolean = false;
  erroMensagem: string = "";
  carregando: boolean = true;
  contatos: Contato[] = [];

  constructor(private contatosService: ContatosService) { }

  ngOnInit(): void {
    this.contatosService.obterContatos()
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

  deletaContato(id: number) {
    let confirmar = confirm("Tem certeza que deseja apagar este contato?");

    if (confirmar) {
      this.contatosService.deletaContato(id)
        .subscribe({
          next: () => {
            this.contatos = this.contatos.filter(x => x.id !== id);
          },
          error: (err) => {

          }
        });
    }
  }
}
