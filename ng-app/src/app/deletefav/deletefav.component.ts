import { Component } from '@angular/core';
import { DeletefavService } from '../deletefav.service';
import { Emp } from '../Models/emp';


@Component({
  selector: 'app-deletefav',
  templateUrl: './deletefav.component.html',
  styleUrl: './deletefav.component.css'
})
export class DeletefavComponent {
  del?: Emp[];
  totaldelSalary:number=0;
  constructor(private deletefavService: DeletefavService) {}
  ngOnInit(): void {
    this.del = this.deletefavService.getdel();
    console.log(this.del.length);
    for(let emp of this.del){
      this.totaldelSalary+=emp["salary"]
    }
  }
 
  
      
  }

