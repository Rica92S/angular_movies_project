import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

    formContatti:any= FormGroup

  constructor() { }

  ngOnInit(): void {
       
  const regExEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  this.formContatti= new FormGroup(
  {
      email: new FormControl(null, Validators.pattern(regExEmail)),
      text: new FormControl(null, Validators.required),
    
    }

  )
  }

  isFormVisible:boolean=true
  isMessageVisible:boolean=false

  onSubmit(){
    this.isMessageVisible=true
    this.isFormVisible=false
    console.log('form contatti valid')
  }
}


 

 
    





