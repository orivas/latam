import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from 'src/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputdataComponent } from './inputdata/inputdata.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InputdataComponent,
    ShowdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
