import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent{
     msg: string = 'How are you? Child...';  //will be passed to child
     msg2:string = "";                        //to get value from child component
     constructor(){}
     ngOnInit(): void {}

    getMessage($event : any) {
      this.msg2 = $event;
    }
  
}
