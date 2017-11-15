import { Component, OnInit, Input } from '@angular/core';

import { Offer } from './offers.model';

@Component({
  selector: '<volontulo-homepage-offer>',
  templateUrl: './homepage-offer.component.html',
  styleUrls: ['./homepage-offer.component.css'],
})
export class HomepageOfferComponent implements OnInit {
  @Input() offer:Offer;

  constructor() {}

  ngOnInit() {
  }
}

