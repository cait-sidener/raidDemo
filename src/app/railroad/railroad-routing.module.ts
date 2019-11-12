import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RailroadHomeComponent } from './railroad-home/railroad-home.component';

const routes: Routes = [
	{ path: 'railroad', component: RailroadHomeComponent },
  ];

  @NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
  })
  export class RailroadRoutingModule { }
