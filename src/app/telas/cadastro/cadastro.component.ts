import { Component, OnInit } from '@angular/core';
import {BackServiceService, Usuario} from '../service/back-service.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit {
  usuario: Usuario = {
   nome: '',
   cpf: '',
   dataNascimento: null,
   tipo: '',
   telefone: '',
   id: 0,
  email: '',
  senha: '',
  confirmarSenha: ''
};
  constructor(private backService: BackServiceService, private router: Router) { }

  cadastrar(){

    if (this.usuario.senha !== this.usuario.confirmarSenha){
      alert('As senhas não são iguais');
      return;
    }
    this.backService.cadastrar(this.usuario)
      .subscribe({
        next: (res) => {
          console.log('Cadastro com sucesso', res);
          this.usuario = {
            nome: '',
              cpf: '',
              dataNascimento: null,
              tipo: '',
              telefone: '',
              id: 0,
              email: '',
              senha: '',
              confirmarSenha: '',
          };
          this.router.navigate(['']);
        },
        error: (err) => {
          console.log('Erro', err);
        }
        });
  }

  ngOnInit(): void {
  }

}
