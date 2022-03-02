import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WorldComponent } from './world/world.component';
import { World1Component } from './world1/world1.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent,WorldComponent,World1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
