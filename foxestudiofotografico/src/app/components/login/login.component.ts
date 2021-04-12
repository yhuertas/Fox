import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routing } from 'src/app/app.routing';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private usu:String="user1";
  private cont:String="Gu1@";
  public mensaje:string="";
  public usuario="";
  public password=""
  public _routing = routing;
  constructor() { }

  ngOnInit(): void {
  }
//temaplatereferencevariable
  loguear(){
    if (this.usu==this.usuario && this.cont==this.password) {
      //[routerLink]="['/admin']" redireccionar a admin
      console.log('usuario: ' + this.usuario + " password:" + this.password)
      //this._routing= this._routing.navigate(['admin']);
      
    } else {
      this.mensaje="Usuario o contraseña incorrectos"
      
    }
  }
}
