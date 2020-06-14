import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ListComponent
  ]
})
export class ShoppingCartModule { }
