import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  categories = [
    {id: 1, name:'Development'},
    {id: 2, name:'Art'},
    {id: 3, name:'Languages'},

  ]


  submit(f){
    console.log(f);
  }

}
