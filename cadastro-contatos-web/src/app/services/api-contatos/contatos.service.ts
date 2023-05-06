import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from 'src/app/interfaces/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {
  private apiUrl: string = "http://localhost:5254/api";

  constructor(private http: HttpClient) { }

  obterContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.apiUrl}/contatos`);
  }

  obterContatoPorId(id: number): Observable<Contato> {
    return this.http.get<Contato>(`${this.apiUrl}/contatos/${id}`);
  }

  criarContato(contato: Contato): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/contatos`, contato);
  }

  editaContato(contato: Contato): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/contatos`, contato);
  }

  deletaContato(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/contatos/${id}`);
  }
}
