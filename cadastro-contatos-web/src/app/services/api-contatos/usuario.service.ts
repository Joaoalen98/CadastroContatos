import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService {
  login(email: string, senha: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuarios/login`, { email, senha });
  }

  cadastro(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuarios/cadastro`, usuario);
  }

  validaToken(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/usuarios/valida-token`, {
      headers: this.getHeaders(),
    });
  }
}
