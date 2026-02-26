import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationBarComponent } from "../shared/components/navigation-bar/navigation-bar.component";
import { translation } from '../shared/translation';
import { LanguageService } from '../shared/language-service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavigationBarComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  language = 'de';
  translation = translation;

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.langService.language$.subscribe(lang => {
      this.language = lang;
    });
  }
}
