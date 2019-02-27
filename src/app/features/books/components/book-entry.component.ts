import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookAdded } from '../actions/books.actions';
import { BooksState } from '../reducers';


@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {

  constructor(private store: Store<BooksState>) { }

  ngOnInit() {
  }

  add(bookTitleElement: HTMLInputElement, authorElement: HTMLInputElement, bookFormatElement: HTMLInputElement) {
    const title = bookTitleElement.value;
    const author = authorElement.value;
    const format = bookFormatElement.value;

    //const title = 'The Canterbury Tales';
    //const author = 'Geoffrey Chaucer';
    //const format = 'Paperback';

    this.store.dispatch(new BookAdded(title, author, format));
  }

}
