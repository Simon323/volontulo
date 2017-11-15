import { Component, OnInit } from '@angular/core';

import { OffersService } from 'app/homepage-offer/offers.service';
import { Offer } from 'app/homepage-offer/offers.model';

@Component({
  selector: 'volontulo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OffersService]
})
export class HomeComponent implements OnInit {
  offers: Array<Offer>;

  constructor(private offersService:OffersService) { }

  ngOnInit(){
    this.offersService.getOffers()
      .subscribe(
        offers => {
          this.offers = offers;
        }
      )
  }
}
