import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostMessageComponent } from './post-message/post-message.component';
import { ViewMessageComponent } from './view-message/view-message.component';

const routes: Routes = [
  { path:'post', component:PostMessageComponent},
  {path:'view', component:ViewMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
