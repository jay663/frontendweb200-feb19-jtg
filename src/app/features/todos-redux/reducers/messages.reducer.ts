import { Action } from '@ngrx/store';

export interface State {
  heading: string;
  greeting: string;
}

const initialize: State = {
  heading: 'Redux Style Todo List',
  greeting: 'Wecome to the Jungle'
};

export function reducer(state: State = initialize, action: Action): State {
  switch (action.type) {
    case 'CLICKY': {
      return {
        heading: state.heading.toUpperCase(),
        greeting: state.greeting
      };
    }
    default: {
      return state;
    }

  }

}
