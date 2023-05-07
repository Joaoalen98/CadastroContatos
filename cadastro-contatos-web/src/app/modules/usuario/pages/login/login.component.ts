import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/api-contatos/usuario.service';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormBuilder().group({
      email: [''],
      senha: ['']
    });
  }

  enviaLogin(e: SubmitEvent) {
    this.usuarioService.login(
      this.form.value.email,
      this.form.value.senha
    )
      .subscribe({
        next: (objAuth) => {
          this.localStorageService.setObjeto("token", objAuth.token);
          this.localStorageService.setObjeto("usuario", objAuth.usuario);
          this.router.navigate(['usuario']);
        },
        error: (err) => {
          if (err.error.mensagem) {
            alert(err.error.mensagem);
          }
        }
      });
  }
}
