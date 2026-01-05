import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TelasModule} from './telas/telas.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {PerfilProfessorModule} from './perfil-professor/perfil-professor.module';
import {EstudioComponent} from './perfil-professor/estudio/estudio.component';
import { InterInterceptor } from './telas/service/inter.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TelasModule,
    HttpClientModule,
    PerfilProfessorModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
