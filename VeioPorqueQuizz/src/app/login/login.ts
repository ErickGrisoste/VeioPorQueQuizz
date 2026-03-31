import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = "";
  senha = "";
  erro = "";

  entrar() {

    if (!this.email || !this.senha) {
      this.erro = "Preencha todos os campos!";
      return;
    }

    const usuariosSalvos = localStorage.getItem("usuarios");

    if (!usuariosSalvos) {
      this.erro = "Usuário não encontrado!";
      return;
    }

    const usuarios = JSON.parse(usuariosSalvos);

    const usuario = usuarios.find((u: any) =>
      u.email === this.email && u.senha === this.senha
    );

    if (!usuario) {
      this.erro = "Email ou senha inválidos!";
      return;
    }

    this.erro = "";

    alert("Login realizado com sucesso!");

    this.email = "";
    this.senha = "";
  }
}