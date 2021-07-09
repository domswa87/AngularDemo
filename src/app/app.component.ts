import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDemo';

  projectStep: number = 0;

  setStep1(){
    this.projectStep = 1;
  }

  setStep2(){
    this.projectStep = 2;
  }

  setStep3(){
    this.projectStep = 3;
  }


}
