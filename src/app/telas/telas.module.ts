import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { InicialComponent } from './inicial/inicial.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PrincipalComponent } from './principal/principal.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    InicialComponent,
    CadastroComponent,
    PrincipalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
  ]
})
export class TelasModule { }
