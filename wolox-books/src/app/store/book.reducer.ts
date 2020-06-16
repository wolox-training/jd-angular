import { Book } from '../screens/book/book';
import * as BookActions from './book.action';

const initialState = [];

export function bookReducer(state: Book[] = initialState, action: BookActions.Actions) {
  switch(action.type) {
    case BookActions.LISTED_BOOK:
      return [...state, ...(action as BookActions.ListedBook).payload]
    default:
      return state;
  }
}
