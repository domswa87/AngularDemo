import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildComponent } from './input-output/child/child.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { NgModelCaseComponent } from './ng-model-case/ng-model-case.component';
import { FormsModule } from '@angular/forms';
import { Counter1Component } from './services/counter1/counter1.component';
import { Counter2Component } from './services/counter2/counter2.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    ChildComponent,
    ParentComponent,
    NgModelCaseComponent,
    Counter1Component,
    Counter2Component,
    ServicesComponent
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
