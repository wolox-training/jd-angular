import { UserComponent } from './user.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: '', pathMatch: 'prefix', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'sign-up', component: RegisterComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
