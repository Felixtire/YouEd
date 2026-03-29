import { Component, OnInit } from '@angular/core';
import {BackServiceService, Usuario} from '../service/back-service.service';
import {Router} from '@angular/router';
import {AuthServiceService} from '../service/auth-service.service';
import {UsuarioLogadoModel} from '../../models/UsuarioLogado.model';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})



export class InicialComponent implements OnInit {

  mostrarErro = false;

  user: UsuarioLogadoModel = {
    email: '',
    senha: '',
  };



  constructor(private backService: BackServiceService, private router: Router, private auth: AuthServiceService) { }
  logar() {
    if (this.user.email === '' || this.user.senha === ''){
      this.mostrarErro = true;
      return;
    }
    console.log(this.user);
    this.backService.logar(this.user)
      .subscribe(
        {
         next: (res) => {
           const tipo = res.token;
           console.log(res.token);
           this.auth.salvarToken(res.token);
           this.user = {
             email: '',
             senha: '',
           };
           this.router.navigate(['feed']);
         },
         error: (err) => {
           this.mostrarErro = true;
         }
        }
      );

  }
  ngOnInit(): void {
  }

}
