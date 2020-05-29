// import { UserComponent } from './screens/user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'login',
      },
      { path: 'sign-up', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
