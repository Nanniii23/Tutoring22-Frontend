import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl
} from "@angular/forms";
import { OfferFormErrorMessages } from "./offer-form-error-messages";
import { OfferFactory } from "../shared/offer-factory";
import { TutoringService } from "../shared/tutoring.service";
import {Appointment, Offer} from "../shared/offer";

@Component({
  selector: 'bs-offer-form',
  templateUrl: './offer-form.component.html',
  styles: [
  ]
})
export class OfferFormComponent implements OnInit {
  offerForm: FormGroup;
  offer = OfferFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingOffer = false;
  appointments: FormArray;

  constructor(
    private fb: FormBuilder,
    private ts: TutoringService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.offerForm = this.fb.group({});
    this.appointments = this.fb.array([]);
  }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.isUpdatingOffer = true;
      this.ts.getSingle(id).subscribe(offer => {
        this.offer = offer;
        this.initOffer();
      });
    }
    this.initOffer();
  }

  initOffer() {
    this.buildDateArray();
    this.offerForm = this.fb.group({
      id: this.offer.id,
      subject: [this.offer.subject, Validators.required],
      description: this.offer.description,
      appointments: this.appointments
    });
    this.offerForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  submitForm() {
    console.log(this.offerForm.value);
    console.log("submitform");
     this.offerForm.value.appointments = this.offerForm.value.appointments.filter(
       //(appointment: {id: number}) => appointment.id,
       (appointment: {date: string}) => appointment.date,
       //(appointment: {isAccepted: boolean}) => false,
      );
      const offer: Offer = OfferFactory.fromObject(this.offerForm.value);
     //offer.appointments = this.offer.appointments;
      if (this.isUpdatingOffer) {
        this.ts.update(offer).subscribe(res => {
          this.router.navigate(["../../offers", offer.id],
            { relativeTo: this.route
            });
        });
      } else {
        offer.user_id = 1;// just for testing
        console.log(offer);
        this.ts.create(offer).subscribe(res => { this.offer = OfferFactory.empty();
          this.offerForm.reset(offer);
          this.router.navigate(["../offers"], { relativeTo: this.route
          });
        });
      }
    }


  addDateControl() {
    this.appointments.push(this.fb.group({ id: 0, date: null}));
  }

  buildDateArray() {
    if (this.offer.appointments) {
      this.appointments = this.fb.array([]);
      console.log("hallo");
      for (let app of this.offer.appointments) {
       console.log("hallo grias di");
        console.log(app.date);
        let fg = this.fb.group({
          id: new FormControl(app.id),
          date: new FormControl(app.date, [Validators.required]),
          //isAccepted: new FormControl(app.isAccepted)
        });

        this.appointments.push(fg);
      }
    }
    else{
      console.log("hallo ich bin da");
      this.addDateControl();
    }
  }

  updateErrorMessages() {
    console.log("Is invalid? " + this.offerForm.invalid);
    this.errors = {};
    for (const message of OfferFormErrorMessages) {
      const control = this.offerForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid && control.errors &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }
}
