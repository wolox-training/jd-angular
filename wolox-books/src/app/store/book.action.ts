import { Action } from '@ngrx/store'

export const LIST_BOOK = "[BOOK] list"
export const LISTED_BOOK = "[BOOK] listed"

export class ListBook implements Action {
  readonly type: string = LIST_BOOK

  constructor(){}
}

export class ListedBook implements Action {
  readonly type: string = LISTED_BOOK

  constructor(public payload: any){}
}

export type Actions = ListBook | ListedBook
