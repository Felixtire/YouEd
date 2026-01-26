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

  user: UsuarioLogadoModel = {
    email: '',
    senha: '',
  };

  constructor(private backService: BackServiceService, private router: Router, private auth: AuthServiceService) { }
  logar() {
    this.backService.logar(this.user)
      .subscribe(
        {
         next: (res) => {
           const tipo = res.tipo;
           console.log(res.token);
           this.auth.salvarToken(res.token);
           this.user = {
             email: '',
             senha: '',
           };
           if (tipo === 'PROFESSOR'){
             this.router.navigate(['feedP']);
           }else {
             this.router.navigate(['feedA']);
           }
         },
         error: (err) => console.log(err)
        }
      );

  }


  ngOnInit(): void {
  }

}
