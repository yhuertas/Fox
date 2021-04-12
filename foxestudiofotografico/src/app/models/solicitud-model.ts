export class SolicitudModel {
    constructor(
        // public _id: string,
         public firstName: string,
         public lastName: string,         
         public phone: number,
         public email: string,
         public message: string,
         public birthDate?:Date,
         //public _id?:string
     ){}
}
