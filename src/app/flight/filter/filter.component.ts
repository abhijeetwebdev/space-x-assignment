import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() updateFilter = new EventEmitter<object>();
  paramsSub: Subscription;
  params = {
    launch_success: null,
    land_success: null,
    launch_year: null
  }

  years = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020'
  ];

  constructor(
    private route: ActivatedRoute,
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
    });
  }

  /**
   * apply filter
   * @param type: string
   * @param value: any
   */
  applyFilter(type: string, value: any) {
    this.updateFilter.emit({
      key: type,
      value: value
    });
  }

  ngOnDestroy() {
    if (this.paramsSub) this.paramsSub.unsubscribe();
  }

}
