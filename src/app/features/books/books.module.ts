import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books.component';
import { BooksListComponent } from './components/books-list.component';
import { BookEntryComponent } from './components/book-entry.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffect } from './effects/books.effects';
import { reducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BooksComponent, BooksListComponent, BookEntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('booksFeature', reducers),
    EffectsModule.forFeature([BooksEffect]),
    HttpClientModule
  ],
  exports: [BooksComponent]
})
export class BooksModule { }