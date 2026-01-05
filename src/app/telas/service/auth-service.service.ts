import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private TOKEN_KEY = 'token';

  salvarToken(token: string){
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  pegarToken(): string | null{
    return localStorage.getItem(this.TOKEN_KEY);
  }
  removerToken(){
    localStorage.removeItem(this.TOKEN_KEY);
  }
  estaLogado(): boolean {
    return !!this.pegarToken();
  }

  constructor() { }
}
