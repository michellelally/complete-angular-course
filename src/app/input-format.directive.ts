import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  //allows us to provide a property to the directive instead of using property binding
  //use the name of the directive as the property for @Input decorator
  @Input('appInputFormat') format;

  //Gets a reference of the host element and injects it into the class
  //Element ref is a service defined in Angular which gives access to a DOM object
  constructor(private el: ElementRef) { }

  //Decorator function that subscribes to events raised by the DOM element that calls this directive
  @HostListener('blur') onBlur() {
    //accessing the DOM object 
    //reading the value of the input field
    let value: string = this.el.nativeElement.value;
    if (this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else 
    this.el.nativeElement.value = value.toUpperCase();
  }



}
