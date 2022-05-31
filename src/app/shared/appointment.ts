import {DatePipe} from "@angular/common";
import {User} from "./user";

export class Appointment {
  constructor(public id: number,
              public date: string,
              public offer_id: number,
              public user_id: number,
              public isAccepted: boolean
              )
  {

  }
}

