import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Alternative {
  text: string;
  correct: boolean;
}

interface Question {
  statement: string;
  alternatives: Alternative[];
}

@Component({
  selector: 'app-quiz',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './quizz.html',
  styleUrls: ['./quizz.css']
})
export class QuizComponent {

  currentQuestionIndex = 0;
  score = 0;

  questions: Question[] = [
    {
      statement: "Qual linguagem é usada no Angular?",
      alternatives: [
        { text: "Java", correct: false },
        { text: "TypeScript", correct: true },
        { text: "Python", correct: false },
        { text: "C#", correct: false }
      ]
    },
    {
      statement: "Qual framework usamos para estilização?",
      alternatives: [
        { text: "Bootstrap", correct: true },
        { text: "Laravel", correct: false },
        { text: "Spring", correct: false },
        { text: "Django", correct: false }
      ]
    }
  ];

  answer(selected: Alternative) {

    if (selected.correct) {
      this.score++;
      alert("Resposta correta!");
    } else {
      alert("Resposta errada!");
    }

    this.nextQuestion();
  }

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  get finished() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}