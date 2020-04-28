import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {

  @Input() likesCount: number;
  @Input() isActive: boolean;

  iconClass = "glyphicon glyphicon-heart";

  onClick(){
    this.likesCount += (this.isActive) ? -1 : +1;
    this.isActive = !this.isActive;
  }

  constructor() { }


}
