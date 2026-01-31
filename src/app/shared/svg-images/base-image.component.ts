import { Input, Directive, HostBinding } from '@angular/core';

@Directive()
export abstract class BaseImageComponent {
  @Input() size = 50;
  @Input() width: number | undefined = undefined;
  @Input() height: number | undefined = undefined;
  @Input() color = '';
  @Input() hoverColor = '';
  @Input() hoverInput = false;
  @Input() opacity = 1;

  hover = false;

  @HostBinding('style.display') display = 'inline-flex';
  @HostBinding('style.width.px') get iconWidth() {
    return this.width === undefined ? this.size : this.width;
  }
  @HostBinding('style.height.px') get iconHeight() {
    return this.height === undefined ? this.size : this.height;
  }
  @HostBinding('style.color') get iconColor() {
    return this.hover ? this.hoverColor : this.color;
  }

}