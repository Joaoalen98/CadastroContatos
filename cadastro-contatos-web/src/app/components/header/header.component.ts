import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      let token = this.localStorageService.getObjecto<string>("token");
      if (token !== null) {
        this.logado = true;
      }
    });
  }

  logout() {
    this.localStorageService.deletaObjetos(['token', 'usuario']);
    this.logado = false;
    this.router.navigate(['usuario', 'login']);
  }
}
