import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
     constructor(private toastr: ToastrService) {}
     ngOnInit():void{
      console.log('Welcome component - Oninit event');
      this.toastr.success('Hello world!', 'Toastr fun!');
      this.toastr.error('Hello world!', 'Some Error');
      this.toastr.info('Hello world!', 'information');
     }

     TryToastr(){
      this.toastr.success('Hello world!','Success')
     }
}
