import { ListComponent } from './components/list/list.component';
import { BookComponent } from './book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'books', component: BookComponent,
    children: [
      { path: 'list', component: ListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
