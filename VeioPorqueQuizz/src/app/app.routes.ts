import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Quiz } from './pages/quiz/quiz';
import { Pergunta } from './pages/pergunta/pergunta';
import { Resultado } from './pages/resultado/resultado';
import { Ranking } from './pages/ranking/ranking';
import { Sobre } from './pages/sobre/sobre';
import { CriarQuiz } from './pages/criar-quiz/criar-quiz';
import { CriarPergunta } from './pages/criar-pergunta/criar-pergunta';
import { ListarQuizzes } from './pages/listar-quiz/listar-quiz';
import { Avaliacao } from './pages/avaliacao/avaliacao';
import { CriarUsuario } from './pages/criar-usuario/criar-usuario';

export const serverRoutes: Routes = [];

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'quiz', component: Quiz },
  { path: 'pergunta', component: Pergunta },
  { path: 'resultado', component: Resultado },
  { path: 'ranking', component: Ranking },
  { path: 'sobre', component: Sobre },
  { path: 'criar-quiz', component: CriarQuiz },
  { path: 'criar-pergunta', component: CriarPergunta },
  { path: 'quizzes', component: ListarQuizzes },
  { path: 'avaliacao', component: Avaliacao },
  { path: 'cadastro', component: CriarUsuario }
];
