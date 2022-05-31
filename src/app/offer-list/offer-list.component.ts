import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Appointment, Offer} from "../shared/offer";
import {of} from "rxjs";
import {TutoringService} from "../shared/tutoring.service";
import {UserService} from "../shared/user.service";
import {User} from "../shared/user";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bs-offer-list',
  templateUrl: './offer-list.component.html',
  styles: [
  ]
})
export class OfferListComponent implements OnInit {

  constructor(private ofr: TutoringService) { }

  @Output() /*showDetailsEvent = new EventEmitter<Offer>();*/

  //@Input('offer') offer: string;

  offers: Offer[] = [];

  ngOnInit(): void {
    /*this.offers = this.ofr.getAll();*/
    this.ofr.getAll().subscribe(res => this.offers = res);
  }



  /*showDetails(offer: Offer) {
    this.showDetailsEvent.emit(offer);
  }*/

}
