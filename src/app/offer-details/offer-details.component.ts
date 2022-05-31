import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Appointment, Offer} from '../shared/offer';
import {ActivatedRoute, Router} from "@angular/router";
import {TutoringService} from "../shared/tutoring.service";
import {AuthenticationService} from "../shared/authentication.service";
import {OfferFactory} from "../shared/offer-factory";

@Component({
  selector: 'bs-offer-details',
  templateUrl: './offer-details.component.html',
  styles: []
})

export class OfferDetailsComponent implements OnInit {

  offer : Offer = OfferFactory.empty();

  constructor(
    private ofr: TutoringService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthenticationService
  ) { }
  ngOnInit() {
    const params = this.route.snapshot.params;
    this.ofr.getSingle(params['id'])
      .subscribe(o => this.offer = o);
    /*this.offer = this.bs.getSingle(params['id']);*/
  }

  removeOffer() {
    if (confirm('Nachhilfeangebot wirklich löschen?')) {
      this.ofr.remove(this.offer.id.toString())
        .subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
    }
  }

  bookAppointment(appointment: Appointment){
    console.log(this.authService.getCurrentUserId());
    appointment.user_id = this.authService.getCurrentUserId();
    //toast message?
    console.log(appointment);
    this.ofr.bookAppointment(appointment).subscribe(res => this.router.navigate(['../'], {
      relativeTo:
      this.route
    }));
    alert("Dieser Termin wurde für dich gebucht!");
  }
}


