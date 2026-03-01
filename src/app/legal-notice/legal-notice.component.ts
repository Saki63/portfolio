import { Component } from '@angular/core';
import { NavigationBarComponent } from '../shared/components/navigation-bar/navigation-bar.component';
import { LanguageService } from '../shared/language-service'
import { translation } from '../shared/translation';
import { colorPalette } from '../shared/color-palette';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { RouterLink } from "@angular/router";
import { ResponsiveHeaderComponent } from "../shared/components/responsive-header/responsive-header.component";

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavigationBarComponent, ResponsiveHeaderComponent, SvgImageModule, RouterLink, ResponsiveHeaderComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  colorPalette = colorPalette;
  language = 'de';
  legalNoticeTranslation = translation['page']['legal-notice'];
  translationMenu = translation;

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.langService.language$.subscribe(lang => {
      this.language = lang;
    });
  }
}
