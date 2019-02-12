import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoEntryComponent } from './components/todo/todo-entry/todo-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    DashboardComponent,
    NavComponent,
    TodoListComponent,
    TodoEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
