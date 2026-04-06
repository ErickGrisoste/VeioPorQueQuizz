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
  idEditando: number | null = null;
  textoEditando: string = '';

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

  removerSugestao(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta sugestão?')) {
      this.http.delete(`${this.API_URL}/${id}`).subscribe({
        next: () => {
          this.sugestoes = this.sugestoes.filter(s => s.id !== id);
        },
        error: (err) => alert('Erro ao excluir sugestão!')
      });
    }
  }

  iniciarEdicao(s: any): void {
    this.idEditando = s.id;
    this.textoEditando = s.texto;
  }

  cancelarEdicao(): void {
    this.idEditando = null;
    this.textoEditando = '';
  }

  atualizarSugestao(): void {
    if (!this.textoEditando.trim() || this.idEditando === null) return;

    const sugestaoAtualizada = { texto: this.textoEditando.trim() };

    this.http.put(`${this.API_URL}/${this.idEditando}`, sugestaoAtualizada).subscribe({
      next: (response: any) => {
        const index = this.sugestoes.findIndex(s => s.id === this.idEditando);
        if (index !== -1) {
          this.sugestoes[index] = response;
        }
        this.cancelarEdicao();
      },
      error: (err) => alert('Erro ao atualizar sugestão!')
    });
  }
}