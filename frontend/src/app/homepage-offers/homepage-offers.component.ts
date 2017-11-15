import { Component, OnInit } from '@angular/core';

import { OffersService } from './offers.service';
import { Offer } from './offers.model';

@Component({
  selector: '<volontulo-homepage-offers>',
  templateUrl: './homepage-offers.component.html',
  styleUrls: ['./homepage-offers.component.css'],
  providers: [OffersService]
})
export class HomepageOffersComponent implements OnInit {
  offers: Array<Offer>;

  constructor(private offersService: OffersService) { }

  ngOnInit() {
   this.offersService.getOffers()
    .subscribe(
      offers => {
        this.offers = offers;
      }
    );
  }
}

