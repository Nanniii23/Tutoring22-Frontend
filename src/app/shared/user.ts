export class User {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public age: number,
    public education: string,
    public isTeacher: boolean
  ) {
  }
}
