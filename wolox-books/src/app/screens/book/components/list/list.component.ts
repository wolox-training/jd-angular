import { Observable } from 'rxjs';
import { AppState } from './../../../../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BookActions from '../../../../store/book.action';
import * as ShoppingCartActions from '../../../../store/shopping-cart.action';
import { Book } from '../../book';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books = this.store.select('book');
  }

  ngOnInit(): void {
    this.store.dispatch(new BookActions.ListBook());
  }

  addShoppingCart(book: Book) {
    this.store.dispatch(new ShoppingCartActions.AddShoppingCart(book))
  }
}
