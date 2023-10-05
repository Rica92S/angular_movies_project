import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  form: any = FormGroup
  email: string = '';
  password: string = '';


  ngOnInit(): void {


    const regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

    this.form = new FormGroup(
      {
        email: new FormControl(null, [Validators.pattern(regExEmail), Validators.required]),
        password: new FormControl(null, [Validators.pattern(regExPassword), Validators.required]),
        select: new FormControl(null, [Validators.required]),
        check: new FormControl(null, [Validators.requiredTrue]),
      }
    )
  }

  background: any = '/assets/images/background-movie-projector.png'


  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    console.log(email, password)
    this.authService.signUp(email,password).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/login'])
  }


}
