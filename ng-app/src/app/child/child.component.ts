import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
    @Input() pmsg:string = '';
    @Output() notify = new EventEmitter(); //sending notify event to parent
    constructor() {}
    // ngOnInit(): void {}

    sendToParent(){
      this.notify.emit("I am fine ....Thanks");
    }
}
