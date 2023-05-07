import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  }

  salvarContato(e: SubmitEvent) {

  }
}
