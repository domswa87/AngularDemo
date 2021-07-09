import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  sumCLicks = 0;
  constructor() { }

  addClicks() {
    this.sumCLicks += 1;
    console.log("Sum from CounterService", this.sumCLicks);
  }
}
