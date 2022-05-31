import {Appointment} from "./appointment";

export class AppointmentFactory {
  static empty(): Appointment {
    return new Appointment(0, '', 0, 0,false);
  }
  static fromObject(rawAppointment: any): Appointment {
    return new Appointment(
      rawAppointment.id,
      typeof (rawAppointment.date) === 'string' ? new Date(rawAppointment.date):rawAppointment.date,
      rawAppointment.offer_id,
      rawAppointment.user_id,
      rawAppointment.isAccepted
    );
  }
}
