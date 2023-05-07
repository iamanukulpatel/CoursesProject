import { CoursesData } from './../courses/courses-service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'],
})
export class ShowDetailsComponent implements OnInit, OnDestroy {
  courseId: any;
  course: any;

  courseNumber: number = 0;

  RouteParamObs: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    //using snapshot.

    // this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.course = CoursesData.find((course) => {
    //   return course.id == this.courseId;
    // });

    //using observable.

    this.RouteParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = CoursesData.find((course) => course.id == this.courseId);
      this.courseNumber = CoursesData.indexOf(this.course);
    });
  }

  //next course
  isLastCourse() {
    this.courseNumber++;
    return this.course.id === CoursesData[CoursesData.length - 1].id;
  }
  //previous course.
  isFirstCourse() {
    this.courseNumber--;
    return this.course.id === CoursesData[0].id;
  }

  ngOnDestroy(): void {
    this.RouteParamObs.unsubscribe();
  }
}
