import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario-service';

@Component({
  selector: 'app-criar-usuario',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './criar-usuario.html',
  styleUrl: './criar-usuario.css',
})
export class CriarUsuario {
  nome = "";
  email = "";
  senha = "";
  confirmarSenha = "";

  erro = "";

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  cadastrar() {

    if (!this.nome || !this.email || !this.senha) {
      this.erro = "Preencha todos os campos!";
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.erro = "As senhas não coincidem!";
      return;
    }

    this.erro = "";

    const novoUsuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };

    this.usuarioService.cadastrar(novoUsuario).subscribe({
      next: () => {
        alert("Usuário cadastrado com sucesso!");

        this.nome = "";
        this.email = "";
        this.senha = "";
        this.confirmarSenha = "";

        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error(err);
        this.erro = "Erro ao cadastrar usuário";
      }
    });
  }
}