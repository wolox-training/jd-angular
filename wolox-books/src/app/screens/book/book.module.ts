import { BookService } from './book.service';
import { TokenInterceptorService } from './../../token-interceptor.service';
import { AppRoutingModule } from './../../app-routing.module';
import { ComponentsModule } from './../../components/components.module';
import { BookRoutingModule } from './book-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    BookComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule
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
