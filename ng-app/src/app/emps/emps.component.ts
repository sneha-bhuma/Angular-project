import { Component } from '@angular/core';
import { EmpsService } from '../emps.service';
import { FormBuilder } from '@angular/forms';
import { Emp } from '../Models/emp';

@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrl: './emps.component.css'
})
export class EmpsComponent {
  //create emps to hold data
  emps:any;
  error:string='';
  start:boolean=true;
  
  empForm = this.formBuilder.group({
    id: [''],
    name: [''],
    salary: [''],
    image: ['']

  });
  ngOnInit(){
    this.getEmpsFromService();
  }
   constructor(private empsService: EmpsService, 
              private formBuilder: FormBuilder) {}

   //get all employees
   getEmpsFromService() {
    this.empsService.getEmps().then((data) => {
      console.log(data);
      this.emps = data; 
      this.start =false;     
    })
    .catch((err) =>{
        console.log(err)
        this.error="Unable to fetch data, check whether server is running or not";
    });
   }

   onSubmit(){
    let id =Number(this.empForm.value.id);
    let name=this.empForm.value.name ||'';
    let salary=Number(this.empForm.value.salary);
    let image=this.empForm.value.image ||'';
    console.log(id,name,salary,image);
    this.addEmp( new Emp(id,name,salary,image));
      
    this.empForm.reset();
   }

   addEmp(emp:Emp){
    this.empsService.addEmp(emp).then(() =>{
      this.getEmpsFromService();
    });
    }
}
 

