import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz {

  pergunta = "Qual linguagem é usada para desenvolver aplicações Angular?";

  opcoes = [
    "Java",
    "Python",
    "TypeScript",
    "C#"
  ];

}