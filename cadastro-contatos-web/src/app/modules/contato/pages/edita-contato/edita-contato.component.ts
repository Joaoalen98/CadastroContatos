import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from 'src/app/interfaces/contato';
import { ContatosService } from 'src/app/services/api-contatos/contatos.service';

@Component({
  selector: 'app-edita-contato',
  templateUrl: './edita-contato.component.html',
  styleUrls: ['./edita-contato.component.scss']
})
export class EditaContatoComponent implements OnInit {
  carregando: boolean = true;
  erro: boolean = false;
  erroMsg: string = "";
  form!: FormGroup;

  constructor(
    private contatoService: ContatosService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    let id: number = 0;
    this.route.params.subscribe(x => {
      id = Number.parseInt(x["id"]);
    });

    this.contatoService.obterContatoPorId(id)
      .subscribe({
        next: (contato) => {
          this.form = new FormBuilder().group({
            id: [contato.id],
            nome: [contato.nome],
            email: [contato.email],
            telefone: [contato.telefone],
            tipoContato: [contato.tipoContato]
          });

          this.carregando = false;
        },
        error: (err) => {
          this.carregando = false;
        }
      })
  }

  enviaEdicao(e: SubmitEvent) {
    let jsonForm = this.form.value;
    let contato = {
      nome: jsonForm.nome,
      email: jsonForm.email,
      telefone: jsonForm.telefone,
      tipoContato: jsonForm.tipoContato,
      id: jsonForm.id,
    } as Contato

    this.contatoService.editaContato(contato)
      .subscribe({
        next: () => {
          alert("Contato editado com sucesso");
          this.router.navigate(['contatos']);
        },
        error: () => {
          alert("Ocorreu um erro ao editar o contato.");
        }
      });
  }
}
