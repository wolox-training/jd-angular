import { Book } from './screens/book/book';

export interface AppState {
  readonly book: Book[];
  readonly shoppingCart: Book[];
}
