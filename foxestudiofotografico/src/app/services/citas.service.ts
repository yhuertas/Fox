import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  apiURL= 'http://localhost:3000/api/schedule/'
  selectedCita:Cita={tipo:"",fecha:null,hour:null,requester:""};
  constructor(private _http: HttpClient) { }



  //Registrar Cita
  registrarCita(citaParams):Observable<any>{
    let params = JSON.stringify(citaParams);
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.post(this.apiURL, params, {headers:options}).pipe((res)=>res)
  }

    //listar todas las citas Activas
    mostrarTodasCita():Observable<any>{
      let options = { headers:new HttpHeaders().set('Content-type','application/json')
    }
      return this._http.get(this.apiURL, options).pipe((res)=>res)
    }

    //listar todas las citas Anteriores
    mostrarTodasCitaAnt():Observable<any>{
      let options = { headers:new HttpHeaders().set('Content-type','application/json')
    }
      return this._http.get(this.apiURL+"vencidas/", options).pipe((res)=>res)
    }
    //Modificar una cita 
    modificarCita(id:string,citaToUp:Cita):Observable<any>{
      let params = JSON.stringify(citaToUp);
      let options = { headers:new HttpHeaders().set('Content-type','application/json')
    }
      return this._http.put(this.apiURL+id,params,options).pipe((res)=>res)
    }

    //eliminar cita
    eliminarCita(id):Observable<any>{
      let options = { headers:new HttpHeaders().set('Content-type','application/json')
    }
      return this._http.delete(this.apiURL+id,options).pipe((res)=>res)
    }


}
