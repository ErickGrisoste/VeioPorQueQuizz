import { Injectable } from '@angular/core';
import { Quiz } from '../model/quiz';
import { Pergunta } from '../model/pergunta';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes: Quiz[] = [];

  quizAtual!: Quiz;

  constructor() {
    this.carregarLocalStorage();
  }

  criarQuiz(titulo: string, descricao: string) {

    const novoQuiz: Quiz = {
      id: Date.now(),
      titulo,
      descricao,
      perguntas: []
    };

    this.quizAtual = novoQuiz;
    this.quizzes.push(novoQuiz);

    this.salvarLocalStorage();
  }

  adicionarPergunta(pergunta: Pergunta) {

    this.quizAtual.perguntas.push(pergunta);

    this.salvarLocalStorage();
  }

  listarQuizzes() {
    return this.quizzes;
  }

  salvarLocalStorage() {
    localStorage.setItem("quizzes", JSON.stringify(this.quizzes));
  }

  carregarLocalStorage() {
    const dados = localStorage.getItem("quizzes");

    if (dados) {
      this.quizzes = JSON.parse(dados);
    }
  }

}