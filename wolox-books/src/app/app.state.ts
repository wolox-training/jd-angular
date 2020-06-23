import { initialState as bookInitialState } from './store/book.reducer';
import { initialState as shoppingCartInitialState } from './store/shopping-cart.reducer';

export interface AppState {
  readonly book: typeof bookInitialState;
  readonly shoppingCart: typeof shoppingCartInitialState;
}
