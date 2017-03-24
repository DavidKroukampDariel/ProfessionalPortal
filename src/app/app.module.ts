import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from "./app-routing.module";
import { FullTimeComponent } from './full-time/full-time.component';
import { WeeklyFeaturesComponent } from './weekly-features/weekly-features.component';
import { AboutComponent } from './about/about.component';
import { PartTimeComponent } from './part-time/part-time.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { StudentsComponent } from './students/students.component';
import { PersonCardComponent } from './person-card/person-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PageNotFoundComponent,
    FullTimeComponent,
    WeeklyFeaturesComponent,
    AboutComponent,
    PartTimeComponent,
    FreelanceComponent,
    StudentsComponent,
    PersonCardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
