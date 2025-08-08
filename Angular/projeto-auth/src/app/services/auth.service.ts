import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';
//serviço de autorização do usuário com Métodos de Registrar, Login, Logout
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //atributos
  private apiUrl = 'http://localhost:3000/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';

  constructor(private router: Router, private http: HttpClient) { }
//registro (cadastrando novo usuário(POST))-> com verificação de cadastros exisentes de usuários (GET)

  registrar(usuario:any):Observable<any>{
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(usuarios => {
        if(usuarios.length>0){
          //se já existir, retornar um erro

          //throwError (criar uma mensagem de erro - exception no sistema - para usar em TRY/CATCH depois) é uma função que retorna um Observable de erro
          return throwError (()=> new Error("Usuário Já Cadastrado"));
        }else{
          //se não existir, cadastrar o usuário
          return this.http.post<any>(this.apiUrl, usuario);
        }
      })
    )
  }
//Login (verificando se o usuário existe no banco de dados pelas credenciais (GET) e armazenando no localStorage)
  //se o usuário existir, armazenar no local e retornar true
  login(credenciais: any): Observable<boolean>{
    //observable de array de qualquer tipo (any[])
    return this.http.get<any[]>(
      `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
        map(usuarios => {//procura pelas credenciais do usuário
          if(usuarios.length>0){
            //aramzenamento da chave auth e informações do usuario em formato de JSON convertido para TEXTO
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuarios[0]));
            //retorna permissão do acesso
            return true;
          }else{
            //retorna negação do acesso em caso de falha na procura das credenciais 
            return false;
          }
        })
      )
  }
//Logout (removendo o usuário do localStorage e redirecionando para a página incial)
  logout(){
    localStorage.removeItem(this.CHAVE_AUTH);//remoção da chave auth que estava armazenada
    this.router.navigate(['/home']);//redirecionamento
  }

//Método para verificar se o usuário está autenticado (verificando se a chave auth existe no localStorage)
  estaAutenticado(): boolean{
    //transformação de variavel STRING para BOOLEAN
    //!! -> negação duas vezes (transforma qualquer valor em booleano) -> Utilizando GET
    return !! localStorage.getItem(this.CHAVE_AUTH);
  }
  //Método para "pegar" informações do usuário autenticado (transformando o TEXTO armazenado em JSON)
  getUsuarioAtual(): any{
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}');//|| '{}' -> caso não exista, retorna um objeto vazio
  }
}
