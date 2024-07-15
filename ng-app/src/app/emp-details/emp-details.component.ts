import { Component } from '@angular/core';
import { Emp } from '../Models/emp';
import { ActivatedRoute } from '@angular/router';
import { EmpsService } from '../emps.service';
import { FavService } from '../fav.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.css'
})
export class EmpDetailsComponent {
    edet?:Emp;
    totalSalary=0;
    constructor(private route: ActivatedRoute,
                private empsService:EmpsService,
                private favService:FavService,
                private toastr: ToastrService){}
    

    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const idFromRoute = Number(routeParams.get('Id'));
      console.log(idFromRoute);
      this.getEmpById(idFromRoute);
    }

    getEmpById(id: number) {
      this.empsService.getEmpById(id).then((data) => {
        console.log(data);
        this.edet = data;
        console.log(this.edet);
      });
    }
    addFav(emp: Emp) {
      let isAdded:Boolean=this.favService.addFav(emp);
      this.favService.addFav(emp);
      console.log(this.favService.addFav(emp));
      
      if(isAdded===true)
        {
          this.toastr.success('Added to favourites');
        }
        else{
          this.toastr.info('Already added to favourites');
        }
        
    }
}
