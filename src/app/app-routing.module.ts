import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import {AppComponent } from './app.component';

const routes: Routes = [
  {path:'events', component:EventsListComponent},
  {path:'', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
