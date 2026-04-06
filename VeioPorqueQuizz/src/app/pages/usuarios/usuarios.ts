import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './usuarios.html'
})
export class Usuarios implements OnInit {

  usuarios: any[] = [];

  editandoId: string | null = null;

  nome = "";
  senha = "";

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.listar().subscribe({
      next: (res: any) => {
        this.usuarios = res;
        console.log(res)
      }
    });
  }

  editar(usuario: any) {
    this.editandoId = usuario.id;
    this.nome = usuario.nome;
    this.senha = usuario.senha;
  }

  salvarEdicao() {

    if (!this.editandoId) return;

    this.usuarioService.atualizar(this.editandoId, {
      nome: this.nome,
      senha: this.senha
    }).subscribe({
      next: () => {
        alert("Atualizado!");
        this.editandoId = null;
        this.nome = "";
        this.senha = "";
        this.carregarUsuarios();
      }
    });

  }

  deletar(id: string) {
    this.usuarioService.deletar(id).subscribe({
      next: () => {
        alert("Deletado!");
        this.carregarUsuarios();
      }
    });
  }

}