import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookListItem } from '../models';
import { selectBooksListItems, BooksState } from '../reducers';
import { BookLoaded } from '../actions/books.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books$: Observable<BookListItem[]>;

  constructor(private store: Store<BooksState>) { }

  ngOnInit() {
    // select - selects data from the store
    // dispatch is another method you use
    this.books$ = this.store.select(selectBooksListItems);   
  }



}
