import { Action } from '@ngrx/store';
import { BookEntity } from '../reducers/books.reducer';

let id = 99;
export const ADD_BOOK = '[booksFeature] add book';
export const GET_BOOKS = '[booksFeature] get books';

export class BookAdded implements Action {
  readonly type = ADD_BOOK;
  payload: BookEntity;
  constructor(title: string, author: string, format: string) {
    this.payload = {
      title,
      author,
      format,
      id: 'T' + (id++)
    };
  }
}

export class BookLoaded implements Action {
  readonly type = GET_BOOKS;
}


// Discriminated Union Type
export type All = BookAdded | BookLoaded;

