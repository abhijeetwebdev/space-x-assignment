import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { ReversePipe } from './../pipes/reverse.pipe';

const routes: Routes = [
  {
    path: '',
    component: FlightComponent
  }
];

@NgModule({
  declarations: [FlightComponent, FilterComponent, CardComponent, ListComponent, ReversePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FlightModule { }
