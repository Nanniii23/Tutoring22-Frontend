export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }
}

export const OfferFormErrorMessages = [
  new ErrorMessage('subject', 'required', 'Ein Fach muss angegeben werden'),
];
