import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { OfferDetailsComponent } from
    './offer-details/offer-details.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { HomeComponent } from './home/home.component';
import {OfferFormComponent} from "./offer-form/offer-form.component";
import { LoginComponent } from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'offers', component: OfferListComponent },
  { path: 'offers/:id', component: OfferDetailsComponent },
  { path: 'admin', component: OfferFormComponent },
  { path: 'admin/:id', component: OfferFormComponent },
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
