import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicialComponent} from './telas/inicial/inicial.component';
import {CadastroComponent} from './telas/cadastro/cadastro.component';
import {PrincipalComponent} from './telas/principal/principal.component';
import {EstudioComponent} from './perfil-professor/estudio/estudio.component';
import {PrincipalProfessorComponent} from './perfil-professor/principal-professor/principal-professor.component';


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
    path: 'feedA',
    component: PrincipalComponent
  },
  {
    path: 'feedP',
    component: PrincipalProfessorComponent
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
