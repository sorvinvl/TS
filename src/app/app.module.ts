import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LittleTourComponent } from './little-tour.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    LittleTourComponent,
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
