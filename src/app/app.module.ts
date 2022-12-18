import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CurriculumComponent } from './cv/curriculum/curriculum.component';
import { CurriculumEditComponent } from './cv/curriculum-edit/curriculum-edit.component';
import { ContactoComponent } from './cv/contacto/contacto.component';

import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './layout/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    CurriculumEditComponent,
    ContactoComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
