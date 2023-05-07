import { Course } from './course';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoursesData } from './courses-service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = CoursesData;

  ngOnInit(): void {}

  //sending this three function to child component.
  getTotalCourse() {
    return this.courses.length;
  }
  getTotalFreeCourses() {
    return this.courses.filter((courses) => courses.type === 'Free').length;
  }
  getTotalPremiumCourses() {
    return this.courses.filter((courses) => courses.type === 'Premium').length;
  }

  courseCountRadioButton: Course[] = this.courses; // new array after filtering course using radio button.
  searchCourseNotFound: string = ''; //if course not found using search input.
  radioEvent: string = 'All';

  //filtering the course using radio button.

  onFilterRAdioButtonChanged(event: string) {
    // console.log(event);
    this.radioEvent = event;
    this.applyFilter();
  }

  //making a function for calling when radio event is placed or search event will take placed.

  applyFilter() {
    if (this.radioEvent === 'All') {
      this.courseCountRadioButton = this.courses;
    } else {
      this.courseCountRadioButton = this.courses.filter(
        (courses) => courses.type === this.radioEvent
      );
    }
  }

  //Search course using input.

  searchCourseShow(event: string) {
    this.applyFilter();
    //filtering the courses.
    const searchQuery = event.toLowerCase();
    const onSearchFilteredCourses = this.courseCountRadioButton.filter(
      (courseName) => courseName.name.toLowerCase().includes(searchQuery)
    );

    // if course found.
    if (onSearchFilteredCourses.length != 0) {
      this.courseCountRadioButton = onSearchFilteredCourses;
      this.searchCourseNotFound = '';
    } // if not course found.
    else {
      this.courseCountRadioButton = [];
      this.searchCourseNotFound = 'Course Not Found';
    }
  }
}
