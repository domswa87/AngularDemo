import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  counterChild1:number = 1;
  sumChild1:number = 0; 

  @Input() inputChild1;
  @Output() outputChild1 = new EventEmitter()

  ngOnInit(): void {
  }

  onClickMethod()
  {
    this.counterChild1 = this.counterChild1 + 1;
    this.sumChild1 = this.inputChild1 + this.counterChild1; 
  } 

  onSendEvent(){
    this.outputChild1.emit(this.counterChild1.toString());
  }

}
