import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { UserComponent} from './user/user.component';
import { RegistrationComponent} from './user/registration/registration.component'
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AddgameComponent } from './addgame/addgame.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'user', component: UserComponent,
  children:
  [
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent}
  ]
},
  {path: 'home', component: HomeComponent}, 
  {path: 'addgame', component: AddgameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
