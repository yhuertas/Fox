import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { SolicitudModel } from '../models/solicitud-model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesServicesService {
  apiURL= 'http://localhost:3000/api/customer/'
  selectedCustomer:SolicitudModel={firstName:"",lastName:"",phone:0,email:"",message:""};

  constructor(
    private _http: HttpClient
  ) { }


  //Registrar solicitud
  registrarSolicitud(solParams):Observable<any>{
    let params = JSON.stringify(solParams);
    let options = new HttpHeaders().set('Content-type','application/json');
    return this._http.post(this.apiURL, params, {headers:options}).pipe((res)=>res)
  }

    //listar todas las solicitudes
    mostrarTodasSolicitudes():Observable<any>{
      let options = { headers:new HttpHeaders().set('Content-type','application/json')
    }
      return this._http.get(this.apiURL, options).pipe((res)=>res)
    }
    //Modificar una solicitud 
    modificarSolicitud(id:string,solicitudToUp:SolicitudModel):Observable<any>{
      let params = JSON.stringify(solicitudToUp);
      let options = { headers:new HttpHeaders().set('Content-type','application/json')
    }
      return this._http.put(this.apiURL+id,params,options).pipe((res)=>res)
    }

    //eliminar solicitud
    eliminarSolicitud(id):Observable<any>{
      let options = { headers:new HttpHeaders().set('Content-type','application/json')
    }
      return this._http.delete(this.apiURL+id,options).pipe((res)=>res)
    }
    
    //listar todas las solicitudes
    consularPublicaciones():Observable<any>{
      let options = { headers:new HttpHeaders().set('Content-type','application/json')
    }
      return this._http.get(this.apiURL+"publish/", options).pipe((res)=>res)
    }
}