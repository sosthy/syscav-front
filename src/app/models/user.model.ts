

export class User {
  email: string;
  password: string;

  constructor(obj?: any) {
    this.password = obj && obj.password || null;
    this.email =  obj && obj.email || null;
  }
}
