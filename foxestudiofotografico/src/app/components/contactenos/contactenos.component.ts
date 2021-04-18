import { Component, OnInit } from '@angular/core';
import M from 'materialize-css';
import { SolicitudModel } from '../../models/solicitud-model'
import { SolicitudesServicesService} from '../../services/solicitudes-services.service'
import { Cita} from '../../models/cita'
import { CitasService } from '../../services/citas.service'
import * as moment from 'moment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {
  public solicitud:SolicitudModel;
  public cita:Cita;
  public acepto:boolean=false;
  public aceptoModal:boolean=false;
  //dpkrOptions = {    format:"dd-mm-yyyy",    defaultDate:new Date(2000, 0, 1),    autoClose:true,     closeAfterSelect: true,    setDefaultDate: true,  selectYears: 15}
  public showSchedule:boolean=false;
  private date:Date=new Date();
  public today = this.date.toISOString().slice(0, 10);
  public hour:string;

  constructor(private solicitudService:SolicitudesServicesService,private citasService:CitasService) { 
    this.solicitud=new SolicitudModel("","",0,"","",null,false);
    this.cita=new Cita("",null,null,"")
  }

  ngOnInit(): void {
  }
  mostrarFormCita(event){
    console.log(event)
    this.showSchedule=event.target.checked;
    this.ngAfterViewInit()
    if (this.date.getHours()+1>=17) {
      this.hour="08:00";
    } else {
      this.hour=this.date.getHours()+1+":00";
    }
    console.log(this.today + ' '+this.hour)
  }

  crear(f:NgForm){
    //Guardar solicitud
      console.log(f.form.value) //valor del formulario
      console.log(this.acepto)
    if (this.acepto) {
      this.solicitud.isShown=false;
      this.solicitudService.registrarSolicitud(this.solicitud).subscribe(
        (res:any)=>{
            alert(" Solicitud guardada exitosamente");
            console.log(res)
            console.log(this.cita.fecha)
            if (this.showSchedule) {//Guardar solicitud con cita.
              this.cita.requester=res.id;
              var hoursplit :any= this.cita.hour.toString().split(':');
              let hournew= new Date(moment(this.cita.fecha, 'YYYY-MM-DD').toDate());
              
              let mm =  moment(hournew)
            hournew.setMinutes(mm.get('minute')+hoursplit[1]);
            hournew.setHours(mm.get('hour')+hoursplit[0]);
            this.cita.hour=hournew
            console.log(this.cita)
              this.citasService.registrarCita(this.cita).subscribe(
                (res2:any)=>{
                alert("Cita guardada exitosamente");
                console.log(res2)

              },
              (error)=>{
                var messageError = <any>error;
                if(messageError != null){
                  console.log(error)
                }
              }
            )
            }  

        },
        (error)=>{
          var messageError = <any>error;
          if(messageError != null){
            console.log(error)
          }
        }
    )
  } else
  {alert("aceta los terminos")}
  }


  ngAfterViewInit() {

    setTimeout(() => {
        /* contador de caracteres */
        var textNeedCount = document.querySelectorAll('#phone, #icon_prefix2');
        M.CharacterCounter.init(textNeedCount);

        /* ventana modal */
        var mod = document.querySelectorAll('.modal');
        var instmod = M.Modal.init(mod, {opacity:0.5,startingTop:"20%"});

        var select = document.querySelectorAll('select');
        var instances = M.FormSelect.init(select, {});

    }, 100);
  }

  aceptar(){
    this.acepto=true
  }

}
