import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counter2',
  templateUrl: './click-counter2.component.html',
  styleUrls: ['./click-counter2.component.scss']
})
export class ClickCounter2Component implements OnInit {

  constructor() { }

  counter = 0;

  ngOnInit(): void {
  }

increment(){
  this.counter = this.counter +1;
}

}
