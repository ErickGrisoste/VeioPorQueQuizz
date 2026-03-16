import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './resultado.html',
  styleUrl: './resultado.css'
})
export class Resultado {
  idEspecifico = 0;
  quizzes: any[] = [];
  quizAtual: any;
  totalPerguntas: any;
  pontuacao = 0;

  constructor (){
    this.idEspecifico = Number(localStorage.getItem('quizId'));

    console.log(String(this.quizzes));

    this.quizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');

    console.log(String(this.quizzes));

    this.quizAtual = this.quizzes.find((q: any) => q.id === this.idEspecifico);

    console.log(String(this.quizAtual));

    this.totalPerguntas = this.quizAtual?.perguntas.length;

    console.log(String(this.totalPerguntas));
  }

  get mensagem() {
    const porcentagem = (this.pontuacao / this.totalPerguntas) * 100;

    if (porcentagem === 100) return "Perfeito!";
    if (porcentagem >= 70) return "Muito bem!";
    if (porcentagem >= 40) return "Nada mal!";
    return "😅 Precisa estudar mais!";
  }

  log(){
    console.log(this.totalPerguntas)
  }

}
