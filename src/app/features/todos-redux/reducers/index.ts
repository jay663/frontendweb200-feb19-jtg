import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoListItem } from '../models';
import * as fromMessage from './messages.reducer';
import * as fromTodos from './todos.reducers';


export interface TodosState {
  message: fromMessage.State;
  todos: fromTodos.State;
}

export const reducers = {
  message: fromMessage.reducer,
  todos: fromTodos.reducer
};

// 1. Create a feature selector (like query)
// selector has to match the string in the app.module
const selectTodosFeature = createFeatureSelector<TodosState>('todosFeature');
// 2. Create a selector for each branch of the feature
// selectors allow us to observe a specific part of the structure
const selectMessage = createSelector(selectTodosFeature, f => f.message);
const selectTodos = createSelector(selectTodosFeature, f => f.todos);
// 3. create any helpers you might need (opt)
const { selectAll: selectTodosEntityArray } = fromTodos.adapter.getSelectors(selectTodos);
// 4. create a selector for what the component needs.
export const selectHeaderMessage = createSelector(selectMessage, m => m.heading);
// TodoEntity[] => TodoListItem[]
export const selectTodoListItems = createSelector(selectTodosEntityArray, t => t.map(x => x as TodoListItem));
