import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationBarComponent } from '../shared/components/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavigationBarComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  @Input() language = 'de';
  @Output() newLanguage = new EventEmitter<'de' | 'en'>();

  switchLanguage(selected: 'de' | 'en') {
    this.newLanguage.emit(selected);
  }
}
