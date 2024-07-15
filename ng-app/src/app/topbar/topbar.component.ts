import { Component } from '@angular/core';
import { SharingService } from '../sharing.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FavService } from '../fav.service';
import { Emp } from '../Models/emp';
import { DeletefavService } from '../deletefav.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  favs?: Emp[];
  delfavs?: Emp[];
  
  isLogged = false;
  loggedin$:any;
  
  constructor(private service: SharingService,
              private router: Router,
              private route: ActivatedRoute,
              private favService: FavService,
              private deletefavService: DeletefavService  ) {}
  title= "ng-app";

  ngOnInit(): void {
    this.isLogged = this.service.isLoggedIn;
    this.loggedin$=this.service.loggedin$;   //subscribe to the observable
    console.log(this.isLogged);
    this.favs = this.favService.getFavs();
    this.delfavs = this.deletefavService.getdel();
    
  }

 
}
