import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
		{path: 'list', component: ListComponent},
		{ path:'list/detail/:id', component:PostDetailComponent},
		
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
