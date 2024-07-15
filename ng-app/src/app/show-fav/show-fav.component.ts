import { Component, OnInit } from '@angular/core';
import { FavService } from '../fav.service';
import { Emp } from '../Models/emp';
import { DeletefavService } from '../deletefav.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-show-fav',
  templateUrl: './show-fav.component.html',
  styleUrl: './show-fav.component.css',
})
export class ShowFavComponent implements OnInit {
  favs?: Emp[];
  del: any=[];
  count:number=0;
  totalSalary:number=0;
  total:number=0;
  share: any;

  constructor(private favService: FavService,
              private deletefavService:DeletefavService,
              private toastr:ToastrService
  ) {}
  ngOnInit(): void {
    this.favs = this.favService.getFavs();
    console.log(this.favs.length);
    for(let emp of this.favs){
      this.totalSalary+=emp["salary"]
    } 
    // this.length=this.favService.controlFavNo()
  }

 
  delFav(emp: Emp) {
    
    this.deletefavService.delFav(emp);
    console.log(this.deletefavService.delFav(emp));
    this.toastr.success("Deleted successfully")
    this.favs = this.favService.getFavs();
    this.total -= emp.salary  
 
    this.share.controlFavNo('b')
    
    }

  //   getdelfavById(id: number) {
     
  //     this.del = this.favService.getFavs();
  //     console.log("deleted item=",this.del);
  // }
  
  so = new Subject();
  so$ = this.so.asObservable();
  
  public controlFavNo(x:string){
    if (x == 'a'){
      this.count += 1
     
    }else{
      this.count -= 1
    }
    this.so.next(this.count);
    // console.log('share',this.count);
   
  }
}