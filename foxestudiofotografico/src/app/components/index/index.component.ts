import { Component, OnInit,AfterViewInit } from '@angular/core';
import M from 'materialize-css';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit,AfterViewInit {
  options = { indicators: true,
    fullWidth: false,dist:-200,shift:75,AutoPlay:true,duration:500,
    numVisible:3};
  
  constructor() { }

  ngOnInit(): void {
    //this.ngAfterViewInit();
  }

  ngAfterViewInit() {
      setTimeout(() => {
      const carousel = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(carousel, this.options);
    }, 100);
    

}
}
