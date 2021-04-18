export class SolicitudModel {
    constructor(
        // public _id: string,
         public firstName: string,
         public lastName: string,         
         public phone: number,
         public email: string,
         public message: string,
         public birthDate?:Date,
         public isShown?:Boolean,
         public _id?:string
         //public _id?:string
     ){}
}
