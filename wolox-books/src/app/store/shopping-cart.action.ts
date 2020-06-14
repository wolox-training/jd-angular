import { Action } from '@ngrx/store';
import { Book } from '../screens/book/book';

export const ADD_SHOPPING_CART = "[SHOPPING CART] ADD";
export const REMOVE_SHOPPING_CART = "[SHOPPING CART] REMOVE";
export const OPEN_SHOPPING_CART = "[SHOPPING CART] OPEN";
export const CLOSE_SHOPPING_CART = "[SHOPPING CART] CLOSE";

export class AddShoppingCart implements Action {
  readonly type: string  = ADD_SHOPPING_CART;

  constructor(public payload: Book) { }
}

export class RemoveShoppingCart implements Action {
  readonly type: string = REMOVE_SHOPPING_CART;

  constructor(public payload: number) {}
}

export class OpenShoppingCart implements Action {
  readonly type: string = OPEN_SHOPPING_CART;

  constructor() {}
}

export class CloseShoppingCart implements Action {
  readonly type: string = CLOSE_SHOPPING_CART;

  constructor() {}
}

export type Actions = AddShoppingCart | RemoveShoppingCart;
