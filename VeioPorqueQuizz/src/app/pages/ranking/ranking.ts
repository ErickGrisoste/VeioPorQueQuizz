import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ranking.html',
  styleUrl: './ranking.css'
})
export class Ranking {

  ranking = [
    { nome: "Ana", pontos: 5 },
    { nome: "Carlos", pontos: 4 },
    { nome: "Marina", pontos: 3 },
    { nome: "João", pontos: 2 },
    { nome: "Lucas", pontos: 1 }
  ];

}