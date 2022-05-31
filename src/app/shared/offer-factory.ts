import { Offer } from './offer';
export class OfferFactory {
  static empty(): Offer {
    return new Offer (0, '', '', 0, [{id: 0, date: '',
    offer_id: 0, user_id: 0, isAccepted: false}]);
  }
  static fromObject(rawOffer: any): Offer {
    return new Offer(
      rawOffer.id,
      rawOffer.subject,
      rawOffer.description,
      rawOffer.user_id,
      rawOffer.appointments,
    );
  }
}
