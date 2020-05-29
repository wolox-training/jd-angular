import { UserComponent } from './screens/user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './screens/booklist/booklist.component';


const routes: Routes = [
  {
    path: 'booklist',
    component: BooklistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
