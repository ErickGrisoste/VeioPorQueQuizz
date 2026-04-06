import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-avaliacao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './avaliacao.html',
  styleUrls: ['./avaliacao.css']
})
export class Avaliacao implements OnInit {

  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/avalicoes'; 

  nota: number = 1;
  comentario: string = '';

  avaliacoes: any[] = [];
  editandoId: number | null = null;

  ngOnInit() {
    this.listarAvaliacoes();
  }


  enviarAvaliacao() {

    if (!this.comentario.trim()) {
      alert('Digite um comentário!');
      return;
    }

    const payload = {
      nota: this.nota,
      opiniao: this.comentario
    };

    if (this.editandoId) {

      this.http.put(`${this.API_URL}/${this.editandoId}`, payload)
        .subscribe(() => {
          this.resetForm();
          this.listarAvaliacoes();
        });

    } else {

      this.http.post(this.API_URL, payload)
        .subscribe(() => {
          this.resetForm();
          this.listarAvaliacoes();
        });
    }
  }

  listarAvaliacoes() {
    this.http.get<any[]>(this.API_URL)
      .subscribe(data => {
        this.avaliacoes = data;
      });
  }

  deletar(id: number) {
    this.http.delete(`${this.API_URL}/${id}`)
      .subscribe(() => {
        this.listarAvaliacoes();
      });
  }

  editar(avaliacao: any) {
    this.nota = avaliacao.nota;
    this.comentario = avaliacao.opiniao;
    this.editandoId = avaliacao.id;
  }

  resetForm() {
    this.nota = 1;
    this.comentario = '';
    this.editandoId = null;
  }
}
