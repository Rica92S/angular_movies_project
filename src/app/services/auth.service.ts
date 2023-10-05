import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { User } from 'src/models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiKey='AIzaSyC5Qbmv-aVIQxd1G0fHo4NwcExBea7RBkQ'
  signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`
  signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`

  isLoggedIn = true

  user:any= User 

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }


  isAuthenticated() {
    return this.isLoggedIn
  }

  
  createUser(email:string, id:string, token:string, expirationDate:Date){
   this.user= new User(email,id,token,expirationDate)
   this.isLoggedIn=true
  }

  signUp(email:string, password:string) {
    return this.http.post(this.signUpUrl, {email:email, password:password, returnSecureToken:true} )
  }


  signIn(email:string, password:string) {
    return this.http.post(this.signInUrl, {email:email, password:password, returnSecureToken:true} )
  }


  
  logout(){
    this.isLoggedIn=false
    this.user=null
    localStorage.removeItem('user')
  }

}




