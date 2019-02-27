import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import * as actions from '../actions/books.actions';
import { BookService } from '../service/book.service';

@Injectable()
export class BooksEffect {

  @Effect({ dispatch: false }) logThemAll$ = this.actions$
    .pipe(
      ofType(actions.ADD_BOOK),
      map(a => a as actions.BookAdded),
      switchMap(action => this.http.post('http://localhost:3000/books', action.payload))
    );

  @Effect({ dispatch: false }) loadBooks$ = this.actions$
    .pipe(
      ofType(actions.GET_BOOKS),
      map(a => a as actions.BookLoaded),
      switchMap(action => this.service.getBooks())
    );

  constructor(private actions$: Actions, private http: HttpClient, private service: BookService) {

  }

}
