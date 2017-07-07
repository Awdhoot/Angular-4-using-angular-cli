import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appSome]',
  exportAs: 'toggle'
})
export class SomeDirective implements OnInit {
  isHighlighted: boolean;

  constructor() {
  }

  @HostBinding('class.list-active')
  get over() {
    return this.isHighlighted;
  }

  @HostListener('mouseenter', ['$event'])
  listenMouseOver(event: any) {
    this.isHighlighted = true;
  }


  @HostListener('mouseleave', ['$event'])
  listenMouseLeave(event: any) {
    console.log('mouse leave');
    this.isHighlighted = false;
  }

  ngOnInit() {
    this.isHighlighted = false;
  }


}
