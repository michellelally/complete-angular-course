import { Component, OnInit } from '@angular/core';
import { CoursesService } from './course.service'

@Component({
  selector: 'courses',
  template: `
      <!-- adding bootstrap -->
      <button class="btn btn-primary" [class.active]="isActive">Save</button>
      
      <!-- class binding --> <br><br>
      <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'red'">Background Colour</button>
      
      <!-- event binding --> <br><br>
      <button  class="btn btn-primary" (click)="onClick($event)">Click</button>
      
      <!-- template variable --> <br><br>
      <input #email (keyup.enter)="onKeyUpForTemplateVariable(email.value)"/>

      <!-- two-way binding --> <br><br>
      <input [(ngModel)]="emailAddress" (keyup.enter)="onKeyUp()"/>

      <!-- pipes --> <br><br>
      {{ course.title | uppercase}} <br>
      {{ course.students | number}} <br>
      {{ course.rating | number: '1.1-1' }} <br>
      {{ course.price | currency:'EUR' }} <br>
      {{ course.releaseDate | date:'shortDate'}} <br>

      <!-- custom pipes --> <br><br>
      {{ text | summary:10 }}

      `
})
export class CourseComponent implements OnInit {

  isActive = false;

  emailAddress="shelley.lally@gmail.com";

  course = {
    title: "The Complete Angular Course",
    rating: 4.956,
    students: 20543,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

  text="LytPzuLuFxVkhBSQHscygKtlC8QcRrex5k6OzuDFAVndOthmoAu4eGbUVSeXDvxLYZgdSjAMLnBF2cKfv2zwS4Bhf1syoLBLIZYqUNUBdSqnyXDlHBGnJr3nH1fS1cK7AqeWawYpB4jXOWMXxgp21QyF1cR6pcl2Aw4nzlW63ennJYY5rcgImMDfA2hk5MwPof46Y2yw";

  onKeyUp() {
      console.log(this.emailAddress);
      }

  onKeyUpForTemplateVariable(email) {
      console.log(email);
  }

  onClick($event){
    console.log("Button was clicked",  $event);
  }

  ngOnInit(): void {
  }

}
