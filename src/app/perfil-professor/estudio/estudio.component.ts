import { Component } from '@angular/core';
import {BackServiceService, Video} from '../../telas/service/back-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatHorizontalStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent {

  fg: FormGroup;

 arquivoSelecionado: File;

  video: Video = {
    titulo: '',
    descricao: '',
    categoria: ''
  };
  categorias = [
    ' CIENCIAS_EXATAS',
    'CIENCIAS_HUMANAS',
    'CIENCIAS_BIOLOGICAS',
    'TECNOLOGIA_E_INOVACAO',
    'ESPORTE'
  ];

  constructor(private backService: BackServiceService, private fb: FormBuilder) {
    this.fg = this.fb.group({
      titulo: [''],
      descricao: [''],
      categoria: this.fb.array([])
    });
  }

  cadastrarVideo(stepper: MatHorizontalStepper): void {
    if (!this.arquivoSelecionado) {
      console.error('Arquivo de vídeo não selecionado');
      return;
    }

    if (this.fg.invalid) {
      console.error('Formulário inválido');
      return;
    }

    const videoC: Video = {
      titulo: this.fg.value.titulo,
      descricao: this.fg.value.descricao,
      categoria: this.fg.value.categoria,
    };
    console.log(this.fg.value);
    this.backService.cadastrarVideo(videoC, this.arquivoSelecionado).subscribe({
      next: (res) => {
        console.log('', res);
        this.proximo(stepper);
        this.video = { titulo: '', descricao: '', categoria: '' };
      },
      error: err => console.error('Erro ao cadastrar vídeo', err)
    });
  }
  onArquivoSelecionado(event: Event ){
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.arquivoSelecionado = input.files[0];
      console.log(this.arquivoSelecionado);
    }

  }
  get categoriasF() {
    return this.fg.value.categoria;
  }
  onChangeCategoria(event: any, categoria: string) {
    const categoriasSelecionadas = this.fg.value.categoria;
    if (event.checked){
      this.categoriasF.push(this.fb.control(categoria));
    }
    else {
      const index = this.categoriasF.controls
        .findIndex((c: any) => c.value === categoria);
      this.categoriasF.removeAt(index);
    }
  }

   proximo(stepper: MatHorizontalStepper) {
    stepper.next();

  }

  protected novoVideo(stepper: MatHorizontalStepper) {
    this.video = { titulo: '', descricao: '', categoria: '' };
    stepper.reset();
  }
}
