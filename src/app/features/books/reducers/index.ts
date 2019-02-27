import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookListItem } from '../models';
import * as fromBooks from './books.reducer';

export interface BooksState {
    books: fromBooks.State;
}

export const reducers = {
    books: fromBooks.reducer
};

// 1. Create a feature selector (like query)
// selector has to match the string in the app.module
const selectBooksFeature = createFeatureSelector<BooksState>('booksFeature');
// 2. Create a selector for each branch of the feature
// selectors allow us to observe a specific part of the structure
const selectBooks = createSelector(selectBooksFeature, f => f.books);
// 3. create any helpers you might need (opt)
const { selectAll: selectBooksEntityArray } = fromBooks.adapter.getSelectors(selectBooks);
// 4. create a selector for what the component needs.

export const selectBooksListItems = createSelector(selectBooksEntityArray, t => t.map(x => x as BookListItem));
