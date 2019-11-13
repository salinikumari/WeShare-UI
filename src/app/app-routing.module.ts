import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostMessageComponent } from './post-message/post-message.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  { path:'post', component:PostMessageComponent},
  {path:'view', component:ViewMessageComponent},
  {path:'users', component:UsersComponent},
  {path:'users/add', component:UserAddComponent},
  {path:'users/edit/:id', component:UserAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
