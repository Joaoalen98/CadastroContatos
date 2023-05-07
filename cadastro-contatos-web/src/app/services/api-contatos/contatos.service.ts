import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from 'src/app/interfaces/contato';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ContatosService extends BaseService {
  obterContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.apiUrl}/contatos`, {
      headers: this.getHeaders()
    });
  }

  obterContatoPorId(id: number): Observable<Contato> {
    return this.http.get<Contato>(`${this.apiUrl}/contatos/${id}`, {
      headers: this.getHeaders()
    });
  }

  criarContato(contato: Contato): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/contatos`, contato, {
      headers: this.getHeaders()
    });
  }

  editaContato(contato: Contato): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/contatos`, contato, {
      headers: this.getHeaders()
    });
  }

  deletaContato(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/contatos/${id}`, {
      headers: this.getHeaders()
    });
  }
}
