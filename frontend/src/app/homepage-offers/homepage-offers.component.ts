import { Component, OnInit } from '@angular/core';

import { HomepageOffersService } from './homepage-offers.service';
import { HomepageOffer } from './homepage-offers.model';

@Component({
  selector: '<volontulo-homepage-offers>',
  templateUrl: './homepage-offers.component.html',
  styleUrls: ['./homepage-offers.component.css'],
  providers: [HomepageOffersService]
})
export class HomepageOffersComponent implements OnInit {
  offers: Array<HomepageOffer>;

  constructor(private offersService: HomepageOffersService) { }

  ngOnInit() {
   this.offersService.getHomepageOffers()
    .subscribe(
      offers => {
        this.offers = offers;
      }
    );
  }
}

