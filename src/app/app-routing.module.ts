import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { FullTimeComponent } from "./full-time/full-time.component";
import { PartTimeComponent } from "app/part-time/part-time.component";
import { FreelanceComponent } from "app/freelance/freelance.component";
import { WeeklyFeaturesComponent } from "app/weekly-features/weekly-features.component";
import { StudentsComponent } from "app/students/students.component";
import { AboutComponent } from "app/about/about.component";

const appRoutes: Routes = [
  { path: 'FullTime', component: FullTimeComponent },
  { path: 'PartTime', component: PartTimeComponent },
  { path: 'Freelance', component: FreelanceComponent },
  { path: 'Students', component: StudentsComponent },
  { path: 'WeeklyFeatures', component: WeeklyFeaturesComponent },
  { path: 'About', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }