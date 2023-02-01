import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from 'src/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputdataComponent } from './inputdata/inputdata.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    InputdataComponent,
    ShowdataComponent,
    DeleteComponent,
    ListComponent
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
