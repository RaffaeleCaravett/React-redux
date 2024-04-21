export interface loginDTO {
  email:string,
  password:string
}

export interface registrationDTO {
  email:string,
  password:string,
  nome:string,
  cognome:string
}

export interface BlogDTO{
  testo:string,
  categoria:string,
  autore:string,
  titolo:string,
  tempoLettura:number,
  user_id:number
}
