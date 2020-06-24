import { Observable } from 'rxjs';
import { AppState } from './../../../../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as BookActions from '../../../../store/book.action';
import * as ShoppingCartActions from '../../../../store/shopping-cart.action';
import { Book } from '../../book';
import { Router } from '@angular/router';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  books: Book[];

  search: string;

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.select('book').subscribe(data => {
      this.books = data['books'];
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new BookActions.ListBook());
  }

  addShoppingCart(book: Book) {
    this.store.dispatch(new ShoppingCartActions.AddShoppingCart(book))
  }

  showBook(id: number) {
    this.router.navigate([`books/${id}`]);
  }
}
