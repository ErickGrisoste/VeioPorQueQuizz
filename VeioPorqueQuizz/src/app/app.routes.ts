import { Routes } from '@angular/router';
import { QuizComponent } from './quizz/quizz';

export const routes: Routes = [
    {path: 'quizz', component: QuizComponent},
    {path: '', redirectTo: 'quizz', pathMatch:'full'},
    {path: '**', component: QuizComponent}
];
