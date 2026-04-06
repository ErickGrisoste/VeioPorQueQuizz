import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre implements OnInit {
  private http = inject(HttpClient); 
  private readonly API_URL = 'http://localhost:3000/sugestoes';

  sugestao: string = '';
  sugestoes: any[] = []; 

  ngOnInit(): void {
    this.carregarSugestoes();
  }

  carregarSugestoes(): void {
    this.http.get<any[]>(this.API_URL).subscribe({
      next: (data) => {
        this.sugestoes = data;
      },
      error: (err) => console.error('Erro ao carregar:', err)
    });
  }

  enviarSugestao(): void {
    if (!this.sugestao.trim()) return;

    const novaSugestao = { texto: this.sugestao.trim() };

    this.http.post(this.API_URL, novaSugestao).subscribe({
      next: (response) => {
        this.sugestoes.push(response); 
        this.sugestao = ''; 
      },
      error: (err) => alert('Erro ao salvar sugestão!')
    });
  }
}