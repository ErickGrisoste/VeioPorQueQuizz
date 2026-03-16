import { Component, TrackByFunction } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz-service';

@Component({
  selector: 'app-criar-pergunta',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './criar-pergunta.html'
})
export class CriarPergunta {

  pergunta = "";

  opcoes = ["", "", "", ""];

  respostaCorreta = 0;


  constructor(
    private quizService: QuizService,
    private router: Router
  ) { }

  trackByIndex(index: number) {
    return index;
  }

  salvarPergunta() {

    this.quizService.adicionarPergunta({
      enunciado: this.pergunta,
      opcoes: this.opcoes,
      correta: this.respostaCorreta
    });

    this.pergunta = "";
    this.opcoes = ["", "", "", ""];

  }

  finalizarQuiz() {
    this.router.navigate(['/home']);
  }

}