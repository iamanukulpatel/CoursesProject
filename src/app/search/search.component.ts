import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {

  

  @Output() public searchCourseByName: EventEmitter<string> =
    new EventEmitter<string>();

  searchCourse: string = '';

  onSearchCourseName() {
    this.searchCourseByName.emit(this.searchCourse);
    // console.log(this.searchCourse);
  }
}
