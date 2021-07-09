import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-case',
  templateUrl: './ng-model-case.component.html',
  styleUrls: ['./ng-model-case.component.scss']
})
export class NgModelCaseComponent implements OnInit {


  ModelDS = "my Text";

  constructor() { }

  ngOnInit(): void {
  }

}
