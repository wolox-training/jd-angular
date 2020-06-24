import { Action } from '@ngrx/store'

export const LIST_BOOK = "[BOOK] list"
export const LISTED_BOOK = "[BOOK] listed"
export const SHOW_BOOK = "[BOOK] show"
export const SHOWED_BOOK = "[BOOK] showed"

export class ListBook implements Action {
  readonly type: string = LIST_BOOK

  constructor(){}
}

export class ListedBook implements Action {
  readonly type: string = LISTED_BOOK

  constructor(public payload: any){}
}

export class ShowBook implements Action {
  readonly type: string = SHOW_BOOK;

  constructor(public payload: string) {}
}

export class ShowedBook implements Action {
  readonly type: string = SHOWED_BOOK;

  constructor(public payload: Object) {}
}

export type Actions = ListBook | ListedBook | ShowBook | ShowedBook
