import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { QuizService } from '../../services/quiz-service';

@Component({
  selector: 'app-criar-quiz',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './criar-quiz.html'
})
export class CriarQuiz {

  titulo = "";
  descricao = "";

  constructor(
    private quizService: QuizService,
    private router: Router
  ) {}

  salvarQuiz() {

    this.quizService.criarQuiz(this.titulo, this.descricao);

    this.router.navigate(['/criar-pergunta']);

  }

}