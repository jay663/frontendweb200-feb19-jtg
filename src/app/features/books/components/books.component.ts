import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookListItem } from '../models';
import { selectBooksListItems, BooksState, selectTitleMessage } from '../reducers';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  message$: Observable<string>;
  books$: Observable<BookListItem[]>;

  constructor(private store: Store<BooksState>) { }

  ngOnInit() {
    // select - selects data from the store
    // dispatch is another method you use
    this.message$ = this.store.select(selectTitleMessage);
    this.books$ = this.store.select(selectBooksListItems);
  }



}
