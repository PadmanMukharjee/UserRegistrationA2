import { Directive, ElementRef, Input,HostListener } from '@angular/core';

@Directive({ selector: '[highlight]' })
export class HighlightDirective {
    constructor(private el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'white';
    }

    @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  @HostListener('keyup') onKeyEnter(){
      this.highlight('grey');
  } 

  @HostListener('keydown') onKeyDown(){
      this.highlight('lightblue');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}