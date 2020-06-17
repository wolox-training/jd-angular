import { Book } from '../screens/book/book';
import * as BookActions from './book.action';

const initialState = {
  books: [],
  book: Object
};

export function bookReducer(state: Object = initialState, action: BookActions.Actions) {
  switch(action.type) {
    case BookActions.LISTED_BOOK:
      return {...state, ...{ books: [...(action as BookActions.ListedBook).payload] }};
    case BookActions.SHOWED_BOOK:
      return {...state, ...{ book: (action as BookActions.ListedBook).payload }};
    default:
      return state;
  }
}
