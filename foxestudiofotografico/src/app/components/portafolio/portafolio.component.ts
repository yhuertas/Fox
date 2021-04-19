import { Component, OnInit } from '@angular/core';
import M from 'materialize-css';
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  options = { 
    indicators: true,
    fullWidth: false,
    dist:-200,
    shift:75,
    AutoPlay:true,
    duration:500,
    numVisible:3};
    
  constructor() { 
   
  }

  ngOnInit(): void {
  }

  
  ngAfterViewInit() {
    
    setTimeout(() => {
    const el = document.querySelectorAll('.carousel');
    var car = M.Carousel.init(el, this.options);
    var instances = M.Carousel.getInstance(el)

    setInterval(()=>{
      console.log(car);
      if(!car.pressed){
        car.next();
      }
    },2000)

  }, 100);
  }
}
