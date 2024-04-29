export interface tokenInterface {
    accessToken: {
      accessToken:string,
      isLoggedIn:boolean
    };
  }

  export interface userInterface {
    user: {
        id:number,
        nome:string,
        cognome:string,
        email:string,
        password:string,
        role:string,
        blogs:unknown[]
    };
  }