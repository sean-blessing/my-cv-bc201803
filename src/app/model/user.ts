export class User {
  Id: number;
  UserName: string;
  Password: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Email: string;
  Reviewer: boolean;
  Admin: boolean;
  Active: boolean

  about(): string {
      return "UserName = "+this.UserName+", firstName = "+this.FirstName+", lastName="+this.LastName;
  }

  constructor(inId: number = 0, uName: string = '', pwd: string = '', fName: string = '', lName: string = '', ph: string = '', em: string = '', rvw: boolean = false, adm: boolean = false, act: boolean = true) {
      this.Id = inId;
      this.UserName = uName;
      this.Password = pwd;
      this.FirstName = fName;
      this.LastName = lName;
      this.PhoneNumber = ph;
      this.Email = em;
      this.Reviewer = rvw;
      this.Admin = adm;
      this.Active = act;
  }
}
