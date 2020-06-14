import * as ShoppingCartActions from './shopping-cart.action'

const initialState = {
  books: [],
  modal: false
}

export function shoppingCartReducer(state = initialState, action: ShoppingCartActions.Actions ) {
  switch (action.type) {
    case ShoppingCartActions.REMOVE_SHOPPING_CART:
      return Object.assign({}, state, { books: state.books.filter(element => element.id != action.payload)});
    case ShoppingCartActions.ADD_SHOPPING_CART:
      return Object.assign({}, state, { books: [...state.books, action.payload]});
    case ShoppingCartActions.OPEN_SHOPPING_CART:
      return Object.assign({}, state, { modal: true });
    case ShoppingCartActions.CLOSE_SHOPPING_CART:
        return Object.assign({}, state, { modal: false });
    default:
      return state;
  }
}
