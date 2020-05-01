import { Component, Input } from '@angular/core';
import { ImplicitReceiver } from '@angular/compiler';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent {

  @Input('title') title: string;
  isExpanded: boolean;

  constructor() { }

  onClick() {
    this.isExpanded = !this.isExpanded;
  }

}
