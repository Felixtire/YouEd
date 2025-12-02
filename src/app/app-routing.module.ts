import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicialComponent} from './telas/inicial/inicial.component';
import {CadastroComponent} from './telas/cadastro/cadastro.component';


const routes: Routes = [
  {
    path: '',
    component: InicialComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
