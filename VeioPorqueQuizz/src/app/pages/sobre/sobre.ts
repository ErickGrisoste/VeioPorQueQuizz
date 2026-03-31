import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre implements OnInit {
  sugestao: string = '';
  sugestoes: string[] = [];

  ngOnInit(): void {
    this.carregarSugestoes();
  }

  carregarSugestoes(): void {
    const data = localStorage.getItem('sugestoes_veio_porque_quizz');
    console.log(JSON.stringify(data));
    if (data) {
      try {
        this.sugestoes = JSON.parse(data);
      } catch (e) {
        this.sugestoes = [];
      }
    }
  }

  enviarSugestao(): void {
    if (!this.sugestao.trim()) return;

    this.sugestoes.push(this.sugestao.trim());
    localStorage.setItem('sugestoes_veio_porque_quizz', JSON.stringify(this.sugestoes));
    this.sugestao = '';
  }
}
