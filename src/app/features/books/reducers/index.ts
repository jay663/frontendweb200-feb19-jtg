import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookListItem } from '../models';
import * as fromMessage from './messages.reducer';
import * as fromBooks from './books.reducer';

export interface BooksState {
    message: fromMessage.State;
    books: fromBooks.State;
}

export const reducers = {
    message: fromMessage.reducer,
    books: fromBooks.reducer
};

// 1. Create a feature selector (like query)
// selector has to match the string in the app.module
const selectBooksFeature = createFeatureSelector<BooksState>('booksFeature');
// 2. Create a selector for each branch of the feature
// selectors allow us to observe a specific part of the structure
const selectMessage = createSelector(selectBooksFeature, f => f.message);
const selectBooks = createSelector(selectBooksFeature, f => f.books);
// 3. create any helpers you might need (opt)
const { selectAll: selectBooksEntityArray } = fromBooks.adapter.getSelectors(selectBooks);
// 4. create a selector for what the component needs.
export const selectTitleMessage = createSelector(selectMessage, m => m.title);
// TodoEntity[] => TodoListItem[]
export const selectBooksListItems = createSelector(selectBooksEntityArray, t => t.map(x => x as BookListItem));
