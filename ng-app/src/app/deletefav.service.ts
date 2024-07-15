import { Injectable } from '@angular/core';
import { Emp } from './Models/emp'

@Injectable({
  providedIn: 'root'
})
export class DeletefavService {
  del: Emp[] = [];

  constructor() {}

  // addFavDel(emp: Emp) {
  //   let e = this.del?.find((p) => p.id === emp.id);
  //   if (!e) {
  //   this.del.push(emp);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  public delFav(e:Emp){
    console.log(e.id,' to del');
    this.del = this.del.filter(obj => {return obj != e})    
}
//   public getdel(e:Emp){
//     console.log(e.id,' to del');
//     this.del = this.del.filter(obj => {return obj != e})    
// }

  public getdel() {
    return this.del;
  }

}
