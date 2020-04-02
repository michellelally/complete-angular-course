import { Component, OnInit } from '@angular/core';
import { CoursesService } from './course.service'

@Component({
  selector: 'courses',
  template: `
      <h2> {{ courses.length }} Courses </h2>
      <ul>
        <li *ngFor="let course of courses"> {{ course }}</li>
      </ul>
  `
})
export class CourseComponent implements OnInit {
  
  courses;

  constructor(service: CoursesService) {
      this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }

}
