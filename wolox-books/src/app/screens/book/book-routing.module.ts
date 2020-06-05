import { ListComponent } from './components/list/list.component';
import { BookComponent } from './book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';

const routes: Routes = [
  {
    path: 'books', component: BookComponent,
    children: [
      { path: '', component: ListComponent, canActivate: [AuthGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
