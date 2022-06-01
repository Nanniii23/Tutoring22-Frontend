import { Component, OnInit } from '@angular/core';
import {Appointment, Offer} from '../shared/offer';
import {ActivatedRoute, Router} from "@angular/router";
import {TutoringService} from "../shared/tutoring.service";
import {AuthenticationService} from "../shared/authentication.service";
import {OfferFactory} from "../shared/offer-factory";

@Component({
  selector: 'bs-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  offer : Offer = OfferFactory.empty();

  constructor(
    private ofr: TutoringService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.ofr.getSingle(params['id'])
      .subscribe(o => this.offer = o);
  }

  getBookedAppointments(){
    console.log(this.authService.getCurrentUserRole());
  }

  getCurrentUserId() {
    return Number.parseInt(<string>sessionStorage.getItem("userId"));
  }

  public getCurrentUserRole() {
    return (sessionStorage.getItem("isTeacher"));
  }


}
