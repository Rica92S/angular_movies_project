import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ServiceService } from '../services/data-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(
    private dataService: ServiceService,
  ) { }

  cerca:string=''

  ngOnInit(): void {
    this.getMostPopoular()
    this.getMostPopoularTv()
    this.getInTheaters()
    this.getBoxOffice()
  }

  customOptions:OwlOptions={
    loop:true,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:true,
    dots:false,
    navSpeed:700,
    navText:['',''],
    responsive:{
      0:{
        items:1
      },
      400:{
        items:2
      },
      740:{
        items:3
      },
      940:{
        items:6
      },
    },
    nav:true
  }

  customOptions2:OwlOptions={
    loop:true,
    mouseDrag:false,
    touchDrag:false,
    pullDrag:false,
    dots:false,
    autoplay:true,
    navText:['',''],
    responsive:{
      0:{
        items:1
      },
      400:{
        items:1
      },
      740:{
        items:1
      },
      940:{
        items:1
      },
    },
    nav:false
  }

  mostPopoular: any[] = []
  mostPopoularTv: any[] = []
  inTheaters: any[] = []
  boxOffice: any[] = []


  //Films
  getMostPopoular() {
    this.dataService.getMostPopoularMovies().subscribe((res: any) => {
      console.log(res)
      this.mostPopoular = res.items;
    }, err => { console.log(err) })
  }//getMostPopoular


  getMostPopoularTv() {
    this.dataService.getMostPopoularTvs().subscribe(res => {
      this.mostPopoularTv = res.items;
      console.log(this.mostPopoularTv)
    }, err => { console.log(err) })
  }//getMostPopoularTv

  getInTheaters() {
    this.dataService.getInTheaters().subscribe(res => {
      this.inTheaters = res.items;
      console.log(this.inTheaters)
    }, err => { console.log(err) })
  }//getInTheaters

  getBoxOffice() {
    this.dataService.getBoxOffice().subscribe(res => {
      this.boxOffice = res.items;
      console.log(this.boxOffice)
    }, err => { console.log(err) })
  }//getBoxOffice



  //======================AcquistaFilm==========================//
  Acquista(){
  
  }

}

