import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpsService {
  _url: string = 'http://localhost:3000/emps/';

  constructor() { }
  
  //write all fetch methods here
  //get all employees
  getEmps(){
    return fetch(this._url).then((res) => res.json());
  }

  // get employee by id
  getEmpById(id: number) {
    return fetch(this._url + id).then((res) => res.json());
  }


  //add new employee
  addEmp(emp:any){
      return fetch(this._url, {
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(emp)
      })
  }
}
