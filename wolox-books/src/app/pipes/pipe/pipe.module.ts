import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterBookPipe } from '../filter-book.pipe';



@NgModule({
  declarations: [FilterBookPipe],
  imports: [
    CommonModule
  ],
  exports: [FilterBookPipe]
})
export class PipeModule { }
