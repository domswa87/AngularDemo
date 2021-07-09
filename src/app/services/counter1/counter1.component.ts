import { Component, OnInit } from '@angular/core';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.scss'],
})
export class Counter1Component implements OnInit {

  counter: number = 0;
  constructor(private clickService: CounterService) { }

  ngOnInit(): void {
  }

  increment(){
    this.counter = this.counter +1;
    this.clickService.addClicks();
  }
}
