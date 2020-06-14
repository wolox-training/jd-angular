import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [NavbarComponent, ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
