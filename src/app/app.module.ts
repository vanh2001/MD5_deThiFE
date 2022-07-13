import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTourComponent } from './component/list-tour/list-tour.component';
import { EditTourComponent } from './component/edit-tour/edit-tour.component';
import { DeleteTourComponent } from './component/delete-tour/delete-tour.component';
import { AddTourComponent } from './component/add-tour/add-tour.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListTourComponent,
    EditTourComponent,
    DeleteTourComponent,
    AddTourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
