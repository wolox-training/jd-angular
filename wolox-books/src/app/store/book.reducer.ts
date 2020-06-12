import { Book } from '../screens/book/book';
import * as BookActions from './book.action';

export function bookReducer(state: Book[] = [], action: BookActions.Actions) {
  switch(action.type) {
    case BookActions.LISTED_BOOK:
      console.log((action as BookActions.ListedBook).payload)
      return [...state, ...(action as BookActions.ListedBook).payload]
    default:
      return [];
  }
}
