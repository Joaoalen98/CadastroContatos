import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logado: boolean = false;

  routerLinkOptions = {
    exact: true
  };

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    let token = this.localStorageService.getObjecto<string>("token");
    if (token !== null) {
      this.logado = true;
    }
  }

  logout() {
    this.localStorageService.deletaObjetos(['token', 'usuario']);
    window.location.reload();
  }
}
