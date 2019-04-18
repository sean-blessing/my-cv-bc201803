import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
