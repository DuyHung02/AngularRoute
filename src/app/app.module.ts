import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './product/show/show.component';
import {HeaderComponent} from "./header/header.component";
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/edit/edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { DeleteComponent } from './product/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    HeaderComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
