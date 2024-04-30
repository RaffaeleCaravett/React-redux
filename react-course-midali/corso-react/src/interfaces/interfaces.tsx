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

  export interface blogs {
    content: [],
empty: boolean,
first: boolean,
last: boolean,
number: number
numberOfElements: number
pageable: 
{
  pageNumber: number,
   pageSize: number,
    sort: unknown, 
    offset: number,
     paged: boolean
    }
size: number
sort: 
{
  empty: boolean,
  sorted: boolean,
  unsorted: boolean
  }
totalElements: number
totalPages: number
  }