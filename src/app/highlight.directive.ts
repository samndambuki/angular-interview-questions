import { Directive, ElementRef, HostListener } from '@angular/core';

//modifies behaviour of an existing element

//ElementRef - provides access to html element when directive is applied
//HostListener - listens to DOM events(mouseenter and mouseleave) and executes functions when these events occur

@Directive({
  //this directive can be used as an attribute in html file
  selector: '[appHighlight]',
})
export class HighlightDirective {
  //called when the directive is initialized
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  //listens for when the mouse enters the element
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

  //listens for when the mouse leaves the element
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }
}
