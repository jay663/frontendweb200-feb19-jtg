import { Action } from '@ngrx/store';

export interface State {
    title: string;
    author: string;
    format: string;
}

const initialize: State = {
    title : 'the title',
    author : 'an author',
    format : 'Paperback'
};

export function reducer(state: State = initialize, action: Action): State {
  switch (action.type) {
    case 'CLICKY': {
      return {
        title: state.title.toUpperCase(),
        author: state.author.toUpperCase(),
        format: state.format
      };
    }
    default: {
      return state;
    }

  }

}
