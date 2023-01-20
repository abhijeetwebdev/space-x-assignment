import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../services/api.service';
import { Flight } from '../models/flight.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flights$: Observable<Flight>;
  params = { limit: 10 };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.flights$ = this.getFlights();
  }

  getFlights(args?: any): Observable<any> {
    const params = args ? args : this.params;
    return this.apiService.getWithParams('/v3/launches', params);
  }

  updateFilter(data) {
    // update query and search again
    const params = {...this.params };
    params[data.key] = data.value;
    this.getFlights(params);
  }

}
