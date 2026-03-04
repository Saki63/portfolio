import { Component, HostListener, Input } from '@angular/core';
import { BubbleComponent } from "./bubble/bubble.component";
import { translation } from '../shared/translation';
import { SvgImageModule } from "../shared/svg-images/svg-images";

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [BubbleComponent, SvgImageModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  translation = translation;
  @Input() language = 'en';

  scrollbehavior = window.innerWidth <= 858;

  scrollable = true;

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.offsetWidth + event.target.scrollLeft >= event.target.scrollWidth - 1) {
      this.scrollable = false;
    } else {
      this.scrollable = true;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.scrollbehavior = window.innerWidth <= 858;
  }
}
