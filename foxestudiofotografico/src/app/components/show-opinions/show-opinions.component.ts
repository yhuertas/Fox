import { Component, OnInit } from '@angular/core';
import { SolicitudesServicesService } from '../../services/solicitudes-services.service'
import { SolicitudModel } from '../../models/solicitud-model';
@Component({
  selector: 'app-show-opinions',
  templateUrl: './show-opinions.component.html',
  styleUrls: ['./show-opinions.component.css']
})
export class ShowOpinionsComponent implements OnInit {
  public listaPublicaciones = [];

  constructor(public solicitudService: SolicitudesServicesService) { }

  ngOnInit(): void {
    this.consultarSolicitudes()
  }


  consultarSolicitudes() {
    this.solicitudService.consularPublicaciones().subscribe((res) => {
      console.log(res)
      console.log('Publicaciones recuperadas')
      this.listaPublicaciones = res;
    },
      (error) => {
        var mensaje = error;
        if (mensaje !== null) {
          console.log("Error consultando las publicacioes. " + mensaje)
        }
      })
  }


}
