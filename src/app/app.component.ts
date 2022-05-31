import { Component } from '@angular/core';
import {Offer} from "./shared/offer";
import {AuthenticationService} from "./shared/authentication.service";

@Component({
  selector: 'bs-root',
  /*template: '<bs-offer-list *ngIf="listOn"\n' +
    '(showDetailsEvent)="showDetails($event)"></bs-offer-list>' +
    '<bs-offer-details *ngIf="detailsOn" [offer]="offer"\n' +
    '(showListEvent)="showList()"></bs-offer-details>'
  ,*/
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  constructor(private authService: AuthenticationService) { }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  getLoginLabel(){
    if(this.isLoggedIn()){
      return "Logout";
    } else {
      return "Login";
    }
  }
}


