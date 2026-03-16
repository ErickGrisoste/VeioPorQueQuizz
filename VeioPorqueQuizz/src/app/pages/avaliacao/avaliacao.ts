import { Component } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.html',
  styleUrls: ['./avaliacao.css']
})

export class Avaliacao {

  nota: number = 0;
  comentario: string = '';

  enviarAvaliacao() {

    const avaliacao = {
      nota: this.nota,
      comentario: this.comentario
    };

    console.log("Avaliação enviada:", avaliacao);

    alert("Obrigado pela sua avaliação!");
  }
}
