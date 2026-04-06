import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  email = "";
  senha = "";
  erro = "";

  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.listar().subscribe({
      next: (res: any) => {
        this.usuarios = res;
      },
      error: () => {
        this.erro = "Erro ao carregar usuários!";
      }
    });
  }

  entrar() {

    if (!this.email || !this.senha) {
      this.erro = "Preencha todos os campos!";
      return;
    }

    const usuario = this.usuarios.find((u: any) =>
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
    
    this.router.navigate(['/home']);
  }
}