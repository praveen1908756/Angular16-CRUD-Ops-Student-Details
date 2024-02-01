import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './components/read/read.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/Partials/navbar/navbar.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentEditComponent } from './components/student-edit/student-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    HomeComponent,
    NavbarComponent,
    StudentCreateComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
