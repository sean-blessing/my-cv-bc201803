export class User {
  id: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  reviewer: boolean;
  admin: boolean;
  active: boolean

  about(): string {
      return "userName = "+this.userName+", firstName = "+this.firstName+", lastName="+this.lastName;
  }

  constructor(inId: number = 0, uName: string = '', pwd: string = '', fName: string = '', lName: string = '', ph: string = '', em: string = '', rvw: boolean = false, adm: boolean = false, act: boolean = true) {
      this.id = inId;
      this.userName = uName;
      this.password = pwd;
      this.firstName = fName;
      this.lastName = lName;
      this.phoneNumber = ph;
      this.email = em;
      this.reviewer = rvw;
      this.admin = adm;
      this.active = act;
  }
}
