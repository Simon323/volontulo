import { Component, OnInit, Input } from '@angular/core';

import { Offer } from './offers.model';

@Component({
  selector: '<volontulo-homepage-offers>',
  templateUrl: './homepage-offers.component.html',
  styleUrls: ['./homepage-offers.component.css'],
})
export class HomepageOffersComponent implements OnInit {
  @Input() offer:Offer;

  constructor() {}

  ngOnInit() {
  }
}

