
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs"; 
//import { GLOBAL } from "./GLOBAL";
//import { User } from "../models/user"; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL= 'http://localhost:3000/api/user/'
  public token; 
  public identity;

  constructor( 
    private _http : HttpClient 
  ) { 
  }


login(user,gettoken = null):Observable<any>{
  let json = user; 
  if(gettoken != null){ 
    user.gettoken = true; 
  }
 
  let headers = new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.url+'login',json,{headers:headers});
}

get_users():Observable<any>{
  let headers = new HttpHeaders().set('Content-Type','application/json');
  return this._http.get(this.url+'usuarios/',{headers:headers});
}
//creamos el servicio
get_user(id):Observable<any>{
  let headers = new HttpHeaders().set('Content-Type','application/json');
  return this._http.get(this.url+'usuario/'+id,{headers:headers});
}


desactivar(id):Observable<any>{
  let headers = new HttpHeaders().set('Content-Type','application/json');
return this._http.put(this.url+'usuario/desactivar/'+id,{headers:headers});
}
activar(id):Observable<any>{
  let headers = new HttpHeaders().set('Content-Type','application/json');
return this._http.put(this.url+'usuario/activar/'+id,{headers:headers});
}

//Guardamos el token en el localstorage, la memoria del computador, para que el sepa que ya hemos iniciado sesion con anterioridad
getToken(){ // Obtener el token del usuario logeado
  let token = localStorage.getItem('token'); //Obtenemos el token que esta guardado en el navegador
  if(token){ //si hay un token en el localstorage que lo guarde en la variable
    this.token = token; //actualizamos el token
  }else{
    this.token = null; //Sino sera nulo
  }

  return this.token; //nos retorne la informacion
}

getIdentity(){ //obtener los datos del usuario logeado
  //parseint parsefloat
  let identity = JSON.parse(localStorage.getItem('identity'));
  //traigo la informacion del inicio de sesion
  if(identity){
    this.identity = identity;
  }
  else{
    this.identity = null;
  }

  return this.identity;
}

}