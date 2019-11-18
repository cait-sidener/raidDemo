import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './components/staff/staff.component';
import { ConsultantsComponent } from './components/consultants/consultants.component';
import { DesignSquadComponent } from './components/design-squad/design-squad.component';

const routes: Routes = [
  { path: 'staff', component: StaffComponent },
  { path: 'consultants', component: ConsultantsComponent },
	{ path: 'squad', component: DesignSquadComponent },
  ];

  @NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
  })
  export class PeopleRoutingModule { }
