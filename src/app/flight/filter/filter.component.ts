import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() updateFilter = new EventEmitter<object>();

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

  constructor() { }

  ngOnInit(): void {
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

}
