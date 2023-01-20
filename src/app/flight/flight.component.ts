import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap  } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

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
    limit: 100
  };

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {

    this.updateMeta();

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

  /**
   * update meta info for SEO purpose
   */
  updateMeta() {
    this.titleService.setTitle('Space X Flights');
    this.metaService.addTags([
      {name: 'keywords', content: 'Space X, Flights'},
      {name: 'description', content: 'This is a demo application, uses spacex\'s open API to display all the flights information.'},
    ]);
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
