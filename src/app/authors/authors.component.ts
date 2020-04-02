import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: `
      <h2> {{ authors.length }} Authors </h2>
      <ul>
        <li *ngFor="let author of authors"> {{ author }}</li>
      </ul>
  `,
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
