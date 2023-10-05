import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{Observable} from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http:HttpClient,
    
  ) { }

  url:string='https://imdb-api.com/it/API'
  

  getMostPopoularMovies():Observable<any>{
    return this.http.get(this.url + '/MostPopularMovies/'+ environment.apy_key)
  }



  getMostPopoularTvs():Observable<any>{
    return this.http.get<any>(this.url + '/MostPopularMovies/' + environment.apy_key)
  }

  getInTheaters():Observable<any>{
    return this.http.get<any>(this.url + '/InTheaters/' + environment.apy_key)
  }

  getBoxOffice():Observable<any>{
    return this.http.get<any>(this.url + '/BoxOffice/' + environment.apy_key)
  }


  //==============DETAIL====================//  
  wsDetail= this.url + `/Title/ ${environment.apy_key}/`

  getDetailsMovies(filmId:string):Observable<any>{
    return this.http.get<any>(this.url + '/Title/'+ environment.apy_key +'/'+ filmId)

  }

  //=================TRAILER REQUEST===========//
 
wsTrailer= this.url + `/YoutubeTrailer/ ${environment.apy_key} /`

getTrailer(filmTrailer:string):Observable<any>{
  return this.http.get<any>(this.url + '/YoutubeTrailer/'+ environment.apy_key + '/'+ filmTrailer)
}


}
