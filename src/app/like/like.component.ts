import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {

  @Input() likesCount: number;
  @Input() isActive: boolean;
  @Output('change') click = new EventEmitter();



  iconClass = "glyphicon glyphicon-heart";
  

  onClick(){
    this.isActive = !this.isActive;
    this.click.emit({ newValue: this.isActive});
  //  this.iconClass = this.isSelected ? "glyphicon glyphicon-heart-empty" : "glyphicon glyphicon-heart";
  }

  onClickTwo(){
    this.isActive = !this.isActive;
  }


  constructor() { }


}
