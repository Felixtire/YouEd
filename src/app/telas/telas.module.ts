import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialComponent } from './inicial/inicial.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { CadastroComponent } from './cadastro/cadastro.component';
import {RouterModule} from '@angular/router';
import { MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [InicialComponent, CadastroComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    MatRadioModule
  ]
})
export class TelasModule { }
