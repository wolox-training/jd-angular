import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.state';
import { Book } from 'src/app/screens/book/book';
import * as ShoppingCartActions from '../../store/shopping-cart.action';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  quantity: number;

  shoppingCart: Observable<Book[]>;

  open: boolean;

  constructor(private sessionService: SessionService, private router: Router, private store: Store<AppState>) {
    this.open = false;
    this.shoppingCart = this.store.select('shoppingCart');
    this.store.select("shoppingCart").subscribe(elements => {
      this.quantity = elements.length || 0;
    });
  }

  closeSession() {
    this.sessionService.deleteSession();
    this.router.navigate(['login']);
  }

  openModal() {
    this.open = true;
  }

  deleteFromShoppingCart(bookId: number) {
    this.store.dispatch(new ShoppingCartActions.RemoveShoppingCart(bookId));
  }
}
