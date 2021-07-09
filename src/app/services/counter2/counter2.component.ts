import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss']
})
export class Counter2Component implements OnInit {

  counter:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter = this.counter +1;
  }
}
