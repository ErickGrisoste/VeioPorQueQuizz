import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Quiz } from './pages/quiz/quiz';
import { Pergunta } from './pages/pergunta/pergunta';
import { Resultado } from './pages/resultado/resultado';
import { Ranking } from './pages/ranking/ranking';
import { Sobre } from './pages/sobre/sobre';


export const serverRoutes: Routes = [];

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'quiz', component: Quiz },
  { path: 'pergunta', component: Pergunta },
  { path: 'resultado', component: Resultado },
  { path: 'ranking', component: Ranking },
  { path: 'sobre', component: Sobre }
];