import { Input, Directive, HostBinding } from '@angular/core';

@Directive()
export abstract class BaseImageComponent {
  @Input() size = 50;
  @Input() color = 'currentColor';

  hover = false;

  @HostBinding('style.display') display = 'inline-flex';
  @HostBinding('style.width.px') get width() {
    return this.size;
  }
  @HostBinding('style.height.px') get height() {
    return this.size;
  }
  @HostBinding('style.color') get iconColor() {
    return this.color;
  }
}