import { Component } from '@angular/core';
import { BackServiceService } from '../../telas/service/back-service.service';
import {Validators} from '@angular/forms';
import {MatHorizontalStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent {

  video = {
    email: '',
    titulo: '',
    descricao: '',
    categoria: ''
  };

  constructor(private backService: BackServiceService) {}

  cadastrarVideo(stepper: MatHorizontalStepper): void {
    if (!this.video.titulo || !this.video.descricao || !this.video.categoria) {
      return;
    }

    this.backService.cadastrarVideo(this.video).subscribe({
      next: (res) => {
        console.log('', res);
        this.proximo(stepper);
        this.video = { email: '', titulo: '', descricao: '', categoria: '' };
      },
      error: err => console.error('Erro ao cadastrar vídeo', err)
    });
  }

   proximo(stepper: MatHorizontalStepper) {
    if (!this.video.email || !this.video.titulo || !this.video.descricao || !this.video.categoria){
      return;
    }
    stepper.next();

  }

  protected novoVideo(stepper: MatHorizontalStepper) {
    this.video = { email: '', titulo: '', descricao: '', categoria: '' };
    stepper.reset();
  }
}
