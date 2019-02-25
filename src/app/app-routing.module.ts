import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoComponent } from './components/todo/todo.component';
import { BooksComponent } from './features/books/components/books.component';
import { TodosReduxComponent } from './features/todos-redux/todos-redux.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'todo-redux',
    component: TodosReduxComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
