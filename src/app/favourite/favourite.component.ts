import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
  
})
export class FavouriteComponent{

  @Input('is-favourite') isFavourite: boolean;
  @Output('change') click = new EventEmitter();

  iconClass = "glyphicon glyphicon-star";

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.click.emit({ newValue: this.isFavourite});
   // this.iconClass = this.isFavourite ? "glyphicon glyphicon-star-empty" : "glyphicon glyphicon-star";
  }

  onClickTwo(){
    this.isFavourite = !this.isFavourite;
  }


}

export class FavouriteChangeEventArgs {
  newValue: boolean;
}
