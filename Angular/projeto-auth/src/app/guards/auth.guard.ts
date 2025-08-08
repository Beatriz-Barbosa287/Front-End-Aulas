
//responsável por proteger rotas que necessitam de autenticação
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate{

  constructor (private authService: AuthService, private router: Router) {}

  //Método canActivate que verifica se o usuário está autenticado
  canActivate(): boolean {
    if (this.authService.estaAutenticado()) {
      //se estiver autenticado, retorna true
      return true;
    } else {
      //se não estiver autenticado, redireciona para a página de login e retorna false
      this.router.navigate(['/login']);
      return false;
    }
  }

  }

