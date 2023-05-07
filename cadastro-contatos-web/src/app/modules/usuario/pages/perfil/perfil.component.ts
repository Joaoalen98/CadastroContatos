import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario!: Usuario;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.usuario = this.localStorageService.getObjecto<Usuario>("usuario")!;
  }
}
