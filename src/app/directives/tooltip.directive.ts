import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input() info: string;
  isVisible = false;

  constructor(private el?: ElementRef) {
    this.el.nativeElement.className = 'customTooltip';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.showPopup();
  }

  private showPopup() {
    const identifier = Date.now();
    if (!this.isVisible) {
      this.isVisible = true;
      const child = document.createElement('div');
      child.className = 'customTooltip-info';
      child.innerText = this.info;
      child.id = `custom-tooltip-info-${identifier}`;
      this.el.nativeElement.parentElement.appendChild(child);
      // unmount element
      setTimeout(() => {
        this.el.nativeElement.parentElement.removeChild(document.querySelector(`#custom-tooltip-info-${identifier}`));
        this.isVisible = false;
      }, 1000);
    }
  }
}
