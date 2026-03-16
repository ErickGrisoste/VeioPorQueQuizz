import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz-service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-quizzes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-quiz.html'
})
export class ListarQuizzes {

  constructor(public quizService: QuizService) {}

}