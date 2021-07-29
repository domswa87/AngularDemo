import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-tests',
  templateUrl: './unit-tests.component.html',
  styleUrls: ['./unit-tests.component.scss']
})
export class UnitTestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  MyName = "Dominik"

  AddNumbers(n1:number, n2:number ):number{
    return n1+n2;
  }

}
