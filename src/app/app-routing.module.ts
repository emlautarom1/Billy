import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ParticipantsComponent } from './participants/participants.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'participants',
    component: ParticipantsComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
