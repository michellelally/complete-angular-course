import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  isFavourite = false;
  iconClass = "glyphicon glyphicon-star";

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.iconClass = this.isFavourite ? "glyphicon glyphicon-star-empty" : "glyphicon glyphicon-star";
  }

  constructor() { }


  ngOnInit(): void {
  }

}
