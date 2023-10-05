import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  form: any = FormGroup
  email:string=''
  password:string=''

  ngOnInit(): void {


    const regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

    this.form = new FormGroup(
      {
        email: new FormControl(null, [Validators.pattern(regExEmail), Validators.required]),
        password: new FormControl(null, [Validators.pattern(regExPassword), Validators.required])
      }
    )
  }

  background: any = '/assets/images/background-movie-projector.png'

  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    console.log(email, password)
    this.authService.signIn(email,password).subscribe((data:any)=> {
      const expirationDate = new Date(new Date().getTime()+ data.expiresIn *1000)
      this.authService.createUser(data.email, data.localId, data.idToken, expirationDate)
      localStorage.setItem('user', JSON.stringify(this.authService.user))
      console.log(this.authService.user)
      this.router.navigate(['/catalogo'])
    }, err => {console.log(err)
       alert('ATTENZIONE: Utente non rinosciuto.')
      form.reset()
    }
  
    )
   
  }



}//onInit






