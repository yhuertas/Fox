import { Component, OnInit } from '@angular/core';
//import { LoginComponent } from '../login/login.component'
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import { CitasService } from '../../services/citas.service'
import { Cita } from '../../models/cita';
import { SolicitudesServicesService } from '../../services/solicitudes-services.service'
import { SolicitudModel } from '../../models/solicitud-model';
import { NgForm } from '@angular/forms';
import M from 'materialize-css';
import * as moment from 'moment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public listaCitas = [];
  public cita: Cita
  public listaSolicitudes = [];
  public options = ["montaje","estudio","exterior","matrimonio","documentos"]
  public solicitud: SolicitudModel
  constructor(public _routing: Router, public citasService: CitasService, //public login:LoginComponent1
    public solicitudService: SolicitudesServicesService

  ) {
    this.cita = new Cita('', null, null, "","")
    this.solicitud = new SolicitudModel("", "", 0, "", "")
  }

  ngOnInit(): void {
    //this.autenticado()
  }
  /*   autenticado(){
      if (!this.login.validador) {
        this._routing.navigate(['']);
      }
    } */
  salir() {
    // this.login.cambiarValor(false);
    this._routing.navigate(['']);
  }

  consultarCitas() {
    this.citasService.mostrarTodasCita().subscribe((res) => {
      //if (res.statusCode == 200){
      console.log(res)
      console.log('Citas recuperadas')
      this.listaCitas = res;
    },
      (error) => {
        var mensaje = error;
        if (mensaje !== null) {
          console.log("Error consultando las citas. " + mensaje)
        }
      })
  }
  //Llenar objeto para luego pasarlo a formulario
  editCita(cita: Cita) {
    this.citasService.selectedCita = cita;
  }

  eliminarCita(id) {
    if (confirm("Estas seguro de eliminar esta cita ? ")) {
      this.citasService.eliminarCita(id).subscribe((res) => {
        this.consultarCitas()
      },
        (error) => {
          var mensaje = error
          if (mensaje !== null) {
            console.log("Error al eliminar la cita. " + mensaje)
          }
        }
      )
    }
  }

   //Actualizar cita
   updateCita(formulario: NgForm)  {
     console.log(formulario.value)
     var hoursplit :any= formulario.value.hour.toString().split(':');
     let hournew= new Date(moment(formulario.value.fecha, 'YYYY-MM-DD').toDate());
            let mm =  moment(hournew)
           hournew.setMinutes(mm.get('minute')+hoursplit[1]);
           hournew.setHours(mm.get('hour')+hoursplit[0]);
           formulario.value.hour=hournew
    this.citasService.modificarCita(formulario.value._id,formulario.value).subscribe((res) => {
      console.log("Empleado actualizado exitosamente" + res)
      this.cleanForm(formulario)
    },
      (error) => {
        console.log( "Error al actualizar el usuairo. " + error)
      })
      return;
  }

  ocultarCitas() {
    this.listaCitas = null;
    this.listaSolicitudes=null
  }

  consultarSolicitudes() {
    this.solicitudService.mostrarTodasSolicitudes().subscribe((res) => {
      console.log(res)
      console.log('Citas recuperadas')
      this.listaSolicitudes = res;
    },
      (error) => {
        var mensaje = error;
        if (mensaje !== null) {
          console.log("Error consultando las citas. " + mensaje)
        }
      })
  }







  ngAfterViewInit() {

    setTimeout(() => {

        /* ventana modal */
        var mod = document.querySelectorAll('.modal');
        var instmod = M.Modal.init(mod, {opacity:0.5,startingTop:"20%"});
        

        var select = document.querySelectorAll('select');
        var instances = M.FormSelect.init(select, {});

    }, 100);
  }

  cleanForm(formulario: NgForm) {
    formulario.reset();
    this.consultarCitas();
  }

}
