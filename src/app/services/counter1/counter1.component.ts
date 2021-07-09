import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.scss']
})
export class Counter1Component implements OnInit {

  counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter = this.counter +1;
  }
}
