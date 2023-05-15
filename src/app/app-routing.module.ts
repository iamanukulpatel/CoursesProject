import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { Error404Component } from './error404/error404.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { BuyCourseComponent } from './buy-course/buy-course.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'course/:id', component: ShowDetailsComponent },
  // { path: 'course/:id/:name', component: BuyCourseComponent },
  {
    path: 'course/:id',
    children: [
      {
        path: ':name',
        component: BuyCourseComponent,
      },
    ],
  },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
