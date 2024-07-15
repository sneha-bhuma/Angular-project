import { Injectable } from '@angular/core';
import { Emp } from './Models/emp';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FavService {
  emps: Emp[] = [];
  count:number=0;
  
  so = new Subject();
  so$ = this.so.asObservable();
  constructor() {}

  addFav(emp: Emp) {
    let e = this.emps?.find((p) => p.id === emp.id);
    if (!e) {
    this.emps.push(emp);
       return true;
      
   } else {
       return false;
       
   }
  }

  public getFavs() {
    return this.emps;
  }

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


