import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthServiceService} from './auth-service.service';

export type Usuario = {
  id: number;
  nome: string;
  dataNascimento: Date | null;
  telefone: string;
  cpf: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  tipo: string;
};

export type UsuarioLogado= {
  email: string;
  senha: string;
};

export type Video= {
  email: string;
  descricao: string;
  categoria: string;
  titulo: string;

};
export type LoginResponse = {
  token: string;
  tipo: string;
};


@Injectable({
  providedIn: 'root'
})
export class BackServiceService {

  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient,  private auth: AuthServiceService ) {
  }



  cadastrar(usuario: Usuario): Observable<any>{
    return this.http.post<Usuario>(`${this.apiUrl}cadastrar`, usuario
    , { observe: 'response'}
    );
  }

  logar(usuario: UsuarioLogado): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}login`, usuario);
  }

  cadastrarVideo(object: any): Observable<Video> {
    return this.http.post<Video>(`${this.apiUrl}video`, object);
  }
}

