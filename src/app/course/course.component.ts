import { Component, OnInit } from '@angular/core';
import { CoursesService } from './course.service'

@Component({
  selector: 'courses',
  template: `
      <button class="btn btn-primary">Save</button>
  `
})
export class CourseComponent implements OnInit {


  ngOnInit(): void {
  }

}
