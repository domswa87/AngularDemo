import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildComponent } from './input-output/child/child.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { NgModelCaseComponent } from './ng-model-case/ng-model-case.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    ChildComponent,
    ParentComponent,
    NgModelCaseComponent
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
