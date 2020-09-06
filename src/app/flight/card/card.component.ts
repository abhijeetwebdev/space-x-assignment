import { Component, OnInit, Input } from '@angular/core';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() flight: Flight;

  constructor() { }

  ngOnInit(): void {
  }

}
