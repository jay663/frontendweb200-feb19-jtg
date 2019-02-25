import { EntityState } from '@ngrx/entity';
import { Action } from '@ngrx/store';

export interface BookEntry {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface State extends EntityState<BookEntry> {

}

const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: 'Clean Garage', author: 'MM', format: 'Hardcover' },
    2: { id: '2', title: 'Fix Downspout', author: 'BB', format: 'E-Book' }
  }
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
