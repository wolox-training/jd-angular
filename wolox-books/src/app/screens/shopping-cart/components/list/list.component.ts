import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as ShoppingCartActions from '../../../../store/shopping-cart.action';
import { Book } from 'src/app/screens/book/book';

@Component({
  selector: 'shopping-cart-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  books: Book[];

  _open: boolean;

  constructor(private store: Store<AppState>) {
    this.store.select('shoppingCart').subscribe(element => {
      this._open = element['modal'];
      this.books = element['books'];
    });
  }

  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this._open = value;
    this.store.dispatch(new ShoppingCartActions.CloseShoppingCart());
  }

  deleteFromShoppingCart(bookId: number) {
    this.store.dispatch(new ShoppingCartActions.RemoveShoppingCart(bookId));
  }
}
