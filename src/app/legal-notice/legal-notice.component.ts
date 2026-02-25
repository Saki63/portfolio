import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationBarComponent } from "../shared/components/navigation-bar/navigation-bar.component";

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavigationBarComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  @Input() language = 'de';
  @Output() newLanguage = new EventEmitter<'de' | 'en'>();

  switchLanguage(selected: 'de' | 'en') {
    this.newLanguage.emit(selected);
  }
}
