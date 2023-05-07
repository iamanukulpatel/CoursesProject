import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { BuyCourseComponent } from './buy-course/buy-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    SearchComponent,
    FilterComponent,
    AboutComponent,
    ContactComponent,
    Error404Component,
    ShowDetailsComponent,
    BuyCourseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
