import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/api-contatos/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.usuarioService.validaToken()
      .subscribe({
        next: (usuario) => {

        },
        error: (err) => {
          console.log(err);
          this.router.navigate(['usuario', 'login']);
        }
      });

    return true;
  }
}
