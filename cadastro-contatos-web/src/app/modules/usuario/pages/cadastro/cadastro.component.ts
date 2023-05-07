import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/api-contatos/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormBuilder().group({
      nome: [''],
      email: [''],
      senha: ['']
    });
  }

  enviaCadastro(e: SubmitEvent) {
    this.usuarioService.cadastro({
      nome: this.form.value.nome,
      email: this.form.value.email,
      senha: this.form.value.senha,
    })
      .subscribe({
        next: () => {
          this.router.navigate(['usuario', 'login']);
        },
        error: (err) => {
          console.log(err);
          if (err.error.mensagem) {
            alert(err.error.mensagem);
          }
        },
      });
  }
}
