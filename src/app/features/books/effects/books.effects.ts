import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as actions from '../actions/books.actions';

@Injectable()
export class BooksEffect {

  @Effect({ dispatch: false }) logThemAll$ = this.actions$
    .pipe(
      ofType(actions.ADD_BOOK),
      map(a => a as actions.BookAdded),
      switchMap(action => this.http.post('http://localhost:3000/books', action.payload))
    );

  constructor(private actions$: Actions, private http: HttpClient) {

  }

}
