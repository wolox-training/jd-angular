import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.state';
import * as ShoppingCartActions from '../../store/shopping-cart.action';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  quantity: number;

  constructor(private sessionService: SessionService, private router: Router, private store: Store<AppState>) {
    this.store.select("shoppingCart").subscribe(element => {
      this.quantity = element['books'] && element['books'].length ? element['books'].length : 0;
    });
  }

  closeSession() {
    this.sessionService.deleteSession();
    this.router.navigate(['login']);
  }

  openModal() {
    this.store.dispatch(new ShoppingCartActions.OpenShoppingCart());
  }
}
