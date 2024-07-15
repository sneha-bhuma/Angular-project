import { Component,inject } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  constructor(private calc:CalculatorService) {}
   classname:string='text-danger';
   calc2 = inject(CalculatorService);
   myName: string='Sneha';
   company:string="Google";
   message: string='';
   weekDay:string="Tue";
   salary: number=54354768;
   friendNames= ["sam","JAm","ram","Dam"];
   isDisabled = false;

   SayHello(){
    this.message= 'Button Clicked......!!'
   }

   getIncrement(){
    return this.calc.add(this.salary, 5000);
   }
}
