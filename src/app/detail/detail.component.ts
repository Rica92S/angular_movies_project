import { Component, OnInit, Sanitizer } from '@angular/core';
import { ServiceService } from '../services/data-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

 


  constructor(
    private dataService: ServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {

  
  }




  details: string = ""
  videos: string = ""

  ngOnInit(): void {
    this.details = this.route.snapshot.params['id']
    this.getMovieDetail()

    this.videos = this.route.snapshot.params['id']
    this.getMovieTrailer()
  }

  url='https://www.youtube.com/watch?v=BcDK7lkzzsU'

  getSantizeUrl(url:string) { 
    return this.sanitizer.bypassSecurityTrustUrl(this.url); 
  }

  //==============TRailer===============//

  movieTrailer: any = {}

  getMovieTrailer() {
    this.dataService.getTrailer(this.videos).subscribe(
      (data) => {
        console.log(data)
        this.movieTrailer = data
      },
      (err) => { console.log(err) }
    )
  }



  //========================================Details===============================================

  movieDetails: any = {}


  getMovieDetail() {

    this.dataService.getDetailsMovies(this.details).subscribe(
      (data) => {
        console.log(data)
        this.movieDetails = data
      },
      (err) => { console.log(err) }
    )
  }


  back() {
    this.router.navigate(['/catalogo'])
  }


}



