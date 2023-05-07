import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contato, TipoContato } from 'src/app/interfaces/contato';
import { ContatosService } from 'src/app/services/api-contatos/contatos.service';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.scss']
})
export class NovoContatoComponent implements OnInit {
  carregando: boolean = true;
  erro: boolean = false;
  erroMsg: string = "";
  form!: FormGroup;

  constructor(private contatoService: ContatosService) {

  }


  ngOnInit(): void {
    this.form = new FormBuilder().group({
      id: [''],
      nome: [''],
      email: [''],
      telefone: [''],
      tipoContato: ['']
    });
  }

  salvarContato(e: SubmitEvent) {
    let contato: Contato = {
      id: 0,
      nome: this.form.value.nome,
      email: this.form.value.email,
      telefone: this.form.value.telefone,
      tipoContato: TipoContato.amigo,
    }

    this.contatoService.criarContato(contato)
      .subscribe({
        next: () => {
          alert("Contato salvo com sucesso");
        },
        error: (err) => {

        }
      });
  }
}
