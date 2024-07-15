import { Component } from '@angular/core';
import { SharingService } from '../sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  
  constructor(private sharingService: SharingService, 
              private router: Router,) {}
  ngOnInit(){
    this.sharingService.doLogout()
  }
  getURL(){
    let currentUrl = this.router.url;
  }
  ifYes(){
    this.router.navigate(['/']);
  }
  ifNo(){
    console.log("currentUrl");
    
  }
}
