import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-samplelogin',
  templateUrl: './samplelogin.component.html',
  styleUrl: './samplelogin.component.css'
})
export class SampleloginComponent {
  loginForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    mailid: ['', Validators.required],
    username: [''],
    password: ['', Validators.required],
    mobile: ['']
  });
  flag=false;
  constructor(private formBuilder: FormBuilder) {}
  updateProfile() {
    this.loginForm.patchValue({
      
    });
  }
  
  onSubmit() {
    if (this.loginForm.value.username=="Admin" && this.loginForm.value.password=="12345"){
       this.flag=true ;
    }
    else{
    console.warn(this.loginForm.value);
    }
  }
}
