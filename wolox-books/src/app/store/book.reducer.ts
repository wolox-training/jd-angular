import { Book } from '../screens/book/book';
import * as BookActions from './book.action';

const initialState = [
  {
    "id": 26,
    "author": "Julio Cortazar",
    "title": "Rayuela",
    "image": {
      "url": null
    },
    "publisher": "Firebrand Books",
    "year": "1923",
    "genre": "Classic",
    "created_at": "2016-11-15T22:47:05.919Z",
    "updated_at": "2016-11-15T22:47:05.919Z"
  }
];

export function bookReducer(state: Book[] = initialState, action: BookActions.Actions) {
  switch(action.type) {
    case BookActions.LISTED_BOOK:
      return [...state, ...(action as BookActions.ListedBook).payload]
    default:
      return state;
  }
}
