import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap  } from 'rxjs/operators';

import { ApiService } from '../services/api.service';
import { Flight } from '../models/flight.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flights$: Observable<Flight>;
  paramsSub: Subscription;
  inProgress = false;

  params = {
    limit: 10
  };

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.paramsSub = this.route.queryParams.subscribe(params => {
      if (params['launch_success']) {
        this.params['launch_success'] = params['launch_success'];
      }
      if (params['land_success']) {
        this.params['land_success'] = params['land_success'];
      }
      if (params['launch_year']) {
        this.params['launch_year'] = params['launch_year'];
      }
      this.flights$ = this.getFlights();
    });
  }

  getFlights(refresh: boolean = true): Observable<any> {
    if (this.inProgress && !refresh) {
      return;
    }
    this.inProgress = true;
    return this.apiService.getWithParams('/v3/launches', this.params)
      .pipe(
        tap((data) => this.inProgress = false)
      );
  }

  ngOnDestroy() {
    if (this.paramsSub) this.paramsSub.unsubscribe();
  }

}
