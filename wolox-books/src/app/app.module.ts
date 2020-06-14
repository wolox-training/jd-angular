import { BookEffect } from './store/book.effect';
import { BookModule } from './screens/book/book.module';
import { UserModule } from './screens/user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/book.reducer';

import { EffectsModule } from '@ngrx/effects';
import { shoppingCartReducer } from './store/shopping-cart.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    UserModule,
    BookModule,
    StoreModule.forRoot({
      book: bookReducer,
      shoppingCart: shoppingCartReducer,
    }),
    EffectsModule.forRoot([BookEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
  ],
  providers: [AuthGuard, UnauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
