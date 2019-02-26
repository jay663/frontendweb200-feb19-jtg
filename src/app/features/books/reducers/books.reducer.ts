import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as actions from '../actions/books.actions';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface State extends EntityState<BookEntity> {

}

const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: 'Clean Garage', author: 'MM', format: 'Hardcover' },
    2: { id: '2', title: 'Fix Downspout', author: 'BB', format: 'E-Book' }
  }
};

export const adapter = createEntityAdapter<BookEntity>();

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.ADD_BOOK: {
      return adapter.addOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
