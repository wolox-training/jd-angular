import { PipeModule } from './../../pipes/pipe/pipe.module';
import { ShoppingCartModule } from './../shopping-cart/shopping-cart.module';
import { RouterModule } from '@angular/router';
import { BookService } from './book.service';
import { TokenInterceptorService } from '../../services/token-interceptor.service';
import { AppRoutingModule } from './../../app-routing.module';
import { ComponentsModule } from './../../components/components.module';
import { BookRoutingModule } from './book-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BookComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ShoppingCartModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    PipeModule,
    FormsModule
  ],
  providers: [
    BookService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  exports: [
    BookRoutingModule
  ]
})
export class BookModule { }
