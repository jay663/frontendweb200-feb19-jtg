import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookAdded } from '../actions/books.actions';
import { } from '../reducers/books.reducer';


@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {

  constructor(private store: Store<BookState>) { }

  ngOnInit() {
  }

  add(descriptionElement: HTMLInputElement) {

    // Todo get the HTML elements here!
    const title = 'The Canterbury Tales';
    const author = 'Geoffrey Chaucer';
    const format = 'Paperback';

    this.store.dispatch(new BookAdded(title, author, format));
  }

}
