import { Component, OnInit } from '@angular/core';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss'],
})
export class Counter2Component implements OnInit {

  counter:number = 0;
  constructor(private clickService: CounterService) { }

  ngOnInit(): void {
  }

  increment(){
    this.counter = this.counter +1;
    this.clickService.addClicks();
  }
}
