import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildComponent } from './input-output/child/child.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { NgModelCaseComponent } from './ng-model-case/ng-model-case.component';
import { FormsModule } from '@angular/forms';
import { ClickCounter1Component } from './services/click-counter1/click-counter1.component';
import { ClickCounter2Component } from './services/click-counter2/click-counter2.component';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    ChildComponent,
    ParentComponent,
    NgModelCaseComponent,
    ClickCounter1Component,
    ClickCounter2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
