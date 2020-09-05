import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() flights: Flight[];

  constructor() { }

  ngOnInit(): void {
  }

}
