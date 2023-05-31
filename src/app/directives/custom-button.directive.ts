import {Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, Renderer2} from '@angular/core';
import {Renderer} from "@angular/compiler-cli/ngcc/src/rendering/renderer";

@Directive({
  selector: '[appCustomButton]'
})
export class CustomButtonDirective implements OnChanges {

  @Input() appCustomButtonText = 'default';
  @Output() buttonClicked = new EventEmitter<void>();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2)
  {}

  ngOnChanges(): void {
    const button = this.renderer.createElement('button');
    const text = this.renderer.createText(this.appCustomButtonText);
    this.renderer.appendChild(button, text);
    this.renderer.appendChild(this.el.nativeElement, button);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.buttonClicked.emit();
  }
}

