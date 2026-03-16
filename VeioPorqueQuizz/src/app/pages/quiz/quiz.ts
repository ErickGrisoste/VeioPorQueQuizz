import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.html'
})
export class Quiz {

  perguntaAtual = 0;
  pontuacao = 0;

  constructor(
    public quizService: QuizService,
    private router: Router
  ) {}

  responder(opcao: number) {

    const pergunta = this.quizService.quizAtual.perguntas[this.perguntaAtual];

    if (opcao === pergunta.correta) {
      this.pontuacao++;
    }

    this.perguntaAtual++;

    if (this.perguntaAtual >= this.quizService.quizAtual.perguntas.length) {
      this.router.navigate(['/resultado']);
    }

  }

}