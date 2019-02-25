import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books.component';
import { BooksListComponent } from './components/books-list.component';
import { BookEntryComponent } from './components/book-entry.component';

@NgModule({
  declarations: [BooksComponent, BooksListComponent, BookEntryComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
