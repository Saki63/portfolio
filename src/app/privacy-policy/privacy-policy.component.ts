import { Component } from '@angular/core';
import { NavigationBarComponent } from '../shared/components/navigation-bar/navigation-bar.component';
import { LanguageService } from '../shared/language-service'
import { translation } from '../shared/translation';
import { colorPalette } from '../shared/color-palette';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { ResponsiveHeaderComponent } from "../shared/components/responsive-header/responsive-header.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavigationBarComponent, SvgImageModule, ResponsiveHeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  colorPalette = colorPalette;
  language = 'de';
  translation = translation['page']['privacy-policy'];
  translationMenu = translation;

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.langService.language$.subscribe(lang => {
      this.language = lang;
    });
  }
}
