import { Component, HostListener, Input } from '@angular/core';
import { SvgImageModule } from '../../shared/svg-images/svg-images';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-bubble',
  standalone: true,
  imports: [SvgImageModule, NgClass],
  templateUrl: './bubble.component.html',
  styleUrl: './bubble.component.scss'
})
export class BubbleComponent {
  @Input() name: string = "";
  @Input() project: string = "";
  @Input() quote: string = "";
  @Input() link: string = "";
  @Input() scrollbehavior: boolean = false;

  scrollable = true;

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 1) {
      this.scrollable = false;
    } else {
      this.scrollable = true;
    }
  }

}
