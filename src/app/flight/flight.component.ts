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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.flights$ = this.getFlights();
  }

  getFlights(): Observable<any> {
    const params = { limit: 10 };
    return this.apiService.getWithParams('/v3/launches', params);
  }

  updateFilter(data) {
    // update query and search again
  }

}
