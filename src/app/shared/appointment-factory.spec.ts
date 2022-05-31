import { AppointmentFactory } from './appointment-factory';

describe('AppointmentFactory', () => {
  it('should create an instance', () => {
    expect(new AppointmentFactory()).toBeTruthy();
  });
});
