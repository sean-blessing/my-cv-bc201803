import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { EduComponent } from './edu/edu.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExpComponent,
    EduComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
