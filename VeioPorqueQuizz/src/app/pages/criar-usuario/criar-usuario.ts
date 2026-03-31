import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

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

    const usuariosSalvos = localStorage.getItem("usuarios");

    let usuarios = [];

    if (usuariosSalvos) {
      usuarios = JSON.parse(usuariosSalvos);
    }

    usuarios.push(novoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuário cadastrado com sucesso!");

    this.nome = "";
    this.email = "";
    this.senha = "";
    this.confirmarSenha = "";
  }

}
