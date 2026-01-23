import { Component, Input } from '@angular/core';
import { SvgImageModule } from '../../shared/svg-images/svg-images';

@Component({
  selector: 'app-bubble',
  standalone: true,
  imports: [ SvgImageModule ],
  templateUrl: './bubble.component.html',
  styleUrl: './bubble.component.scss'
})
export class BubbleComponent {
  @Input() name: string = "";
  @Input() project: string = "";
  @Input() quote: string = "";
  @Input() link: string = "";

}
