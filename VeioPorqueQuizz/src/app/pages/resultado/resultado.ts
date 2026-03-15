import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './resultado.html',
  styleUrl: './resultado.css'
})
export class Resultado {

  pontuacao = 3;
  totalPerguntas = 5;

  get mensagem() {
    const porcentagem = (this.pontuacao / this.totalPerguntas) * 100;

    if (porcentagem === 100) return "Perfeito!";
    if (porcentagem >= 70) return "Muito bem!";
    if (porcentagem >= 40) return "Nada mal!";
    return "😅 Precisa estudar mais!";
  }

}