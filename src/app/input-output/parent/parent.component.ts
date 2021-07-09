import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  counterParent:number = 1000;
  sumParent:number = 0;

  ngOnInit(): void {
  }

  onClickMethod()
  {
    this.counterParent = this.counterParent + 1000;
  }

  receiveEventMethod(event){
    this.sumParent = this.counterParent + parseInt(event);
  }

}
