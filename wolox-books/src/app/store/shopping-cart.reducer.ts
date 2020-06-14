import * as ShoppingCartActions from './shopping-cart.action'

const initialState = []

export function shoppingCartReducer(state = initialState, action: ShoppingCartActions.Actions ) {
  switch (action.type) {
    case ShoppingCartActions.REMOVE_SHOPPING_CART:
      return state.filter(element => element.id != action.payload);
    case ShoppingCartActions.ADD_SHOPPING_CART:
      return [...state, action.payload]
    default:
      return state;
  }
}
