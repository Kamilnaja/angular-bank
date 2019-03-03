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
    if (!this.isVisible) {
      this.isVisible = true;
      const child = document.createElement('div');
      child.className = 'customTooltip-info';
      child.innerText = this.info;
      child.id = 'custom-tooltip-info';
      this.el.nativeElement.parentElement.appendChild(child);
      // unmount element
      setTimeout(() => {
        this.el.nativeElement.parentElement.removeChild(document.querySelector('#custom-tooltip-info'));
        this.isVisible = false;
      }, 1000);
    }
  }
}
