import { AppRoutingModule } from './../../app-routing.module';
import { ComponentsModule } from './../../components/components.module';
import { BookRoutingModule } from './book-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    BookComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule
  ],
  exports: [
    BookRoutingModule
  ]
})
export class BookModule { }
