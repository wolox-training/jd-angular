import { ListComponent } from './components/list/list.component';
import { BookComponent } from './book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  {
    path: 'books', component: BookComponent,
    children: [
      { path: '', component: ListComponent, canActivate: [AuthGuard] },
      { path: ':id', component: ShowComponent, canActivate: [AuthGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
