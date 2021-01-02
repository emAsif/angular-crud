export class NewUser {
    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public username: string,
      public birthday: Date,
      public address?: string
    ) {}

  }