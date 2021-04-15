import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import M from 'materialize-css';


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
  public validador:Boolean=false
  constructor(
    public _routing:Router) { }

  ngOnInit(): void {
  }
//temaplatereferencevariable
  loguear(){
    console.log('usuario: ' + this.usuario + " password:" + this.password)
    if (this.usu==this.usuario && this.cont==this.password) {
      //[routerLink]="['/admin']" redireccionar a admin
      //this.cambiarValor(true);
      //this.validador=true;
      this._routing.navigate(['admin']);
      
    } else {
      this.mensaje="Usuario o contraseña incorrectos"
      
    }
  }
  //cambiarValor(valor:Boolean){
  //  this.validador = valor;
  //}


  ngAfterViewInit() {

    setTimeout(() => {

        
  M.updateTextFields();

    }, 100);
  }

}
