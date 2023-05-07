import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesData } from '../courses/courses-service';

@Component({
  selector: 'app-buy-course',
  templateUrl: './buy-course.component.html',
  styleUrls: ['./buy-course.component.css'],
})
export class BuyCourseComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}

  courseId: any;
  courseSelected: any;

  ngOnInit(): void {
    this.courseId = this.activeRoute.snapshot.paramMap.get('id');
    this.courseSelected = CoursesData.find((course) => {
      return this.courseId == course.id;
    });
  }
}
