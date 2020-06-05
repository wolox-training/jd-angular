import { UserComponent } from './user.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { UnauthGuard } from 'src/app/unauth.guard';


const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent, canActivate: [UnauthGuard] },
      { path: 'sign-up', component: RegisterComponent, canActivate: [UnauthGuard] },
      { path: '', pathMatch: 'prefix', redirectTo: 'login' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
