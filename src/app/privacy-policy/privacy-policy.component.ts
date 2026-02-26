import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationBarComponent } from '../shared/components/navigation-bar/navigation-bar.component';
import { LanguageService } from '../shared/language-service'
import { translation } from '../shared/translation';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavigationBarComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  language = 'de';
  translation = translation;

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.langService.language$.subscribe(lang => {
      this.language = lang;
    });
  }
}
