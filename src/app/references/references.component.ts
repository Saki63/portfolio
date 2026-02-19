import { Component, Input } from '@angular/core';
import { BubbleComponent } from "./bubble/bubble.component";
import { translation } from '../shared/translation';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [BubbleComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  translation = translation;
  @Input() language = 'en';
}
