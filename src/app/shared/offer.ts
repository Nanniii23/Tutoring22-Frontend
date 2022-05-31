import { Appointment } from "./appointment";
import {User} from "./user";

export { Appointment } from "./appointment";

export class Offer {
  constructor(
    public id: number,
    public subject: string,
    public description: string,
    public user_id: number,
    //public user: User,
    public appointments?: Appointment[]
  ) {}
}
