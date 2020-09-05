import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [FlightComponent, FilterComponent, CardComponent, ListComponent],
  imports: [
    CommonModule
  ]
})
export class FlightModule { }
