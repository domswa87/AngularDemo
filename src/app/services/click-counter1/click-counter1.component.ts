import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counter1',
  templateUrl: './click-counter1.component.html',
  styleUrls: ['./click-counter1.component.scss']
})
export class ClickCounter1Component implements OnInit {

  constructor() { }

  counter = 0;

  ngOnInit(): void {
  }

  increment(){
    this.counter = this.counter +1;
  }

}
