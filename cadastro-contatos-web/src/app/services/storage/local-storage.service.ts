import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getObjecto<T>(chave: string): T | null {
    let objeto = localStorage.getItem(chave);
    return objeto === null ? null : JSON.parse(objeto);
  }

  setObjeto(chave: string, objeto: any) {
    localStorage.setItem(chave, JSON.stringify(objeto));
  }

  deletaObjetos(chaves: string[]): void {
    chaves.forEach(chave => {
      localStorage.removeItem(chave);
    });
  }
}
