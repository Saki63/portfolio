import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { translation } from '../shared/translation';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  @Input() key: 'why-me' | 'skills' | 'projects' | 'contact' = 'why-me';
  @Input() language = 'en';

  translation = translation;
}
