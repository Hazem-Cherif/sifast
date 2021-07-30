import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {QuestionComponent} from "./question/question.component";
import {AddQuestionComponent} from "./question/add-question/add-question.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
  path: 'home',
  component: HomePageComponent,
  pathMatch: 'full',
  },
  {
    path: 'questions',
    component: QuestionComponent,
    pathMatch: 'full',
  },
  {
    path: 'add-question',
    component: AddQuestionComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
