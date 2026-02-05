import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicialComponent} from './telas/inicial/inicial.component';
import {CadastroComponent} from './telas/cadastro/cadastro.component';
import {PrincipalComponent} from './telas/principal/principal.component';
import {EstudioComponent} from './perfil-professor/estudio/estudio.component';


const routes: Routes = [
  {
    path: '',
    component: InicialComponent,
  },
  {
    path: 'cadastrar',
    component: CadastroComponent
  },
  {
    path: 'feed',
    component: PrincipalComponent
  },
  {
    path: 'studio',
    component: EstudioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
