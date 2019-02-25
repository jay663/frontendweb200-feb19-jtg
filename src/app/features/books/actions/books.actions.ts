import { Action } from '@ngrx/store';
import { BookEntry } from '../reducers/books.reducer';

let id = 99;
export const ADD_BOOK = '[booksFeature] add book';
export class BookAdded implements Action {
  readonly type = ADD_BOOK;
  payload: BookEntry;
  constructor(title: string, author: string, format: string) {
    this.payload = {
      title,
      author,
      format,
      id: 'T' + (id++)
    };
  }
}

