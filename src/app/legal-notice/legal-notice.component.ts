import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NavigationBarComponent } from '../shared/components/navigation-bar/navigation-bar.component';
import { LanguageService } from '../shared/language-service'
import { translation } from '../shared/translation';
import { LogoComponent } from '../shared/logo/logo.component';
import { colorPalette } from '../shared/color-palette';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { NgClass } from '@angular/common';
import { LanguageSelectionComponent } from '../shared/components/language-selection/language-selection.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavigationBarComponent, LogoComponent, SvgImageModule, NgClass, LanguageSelectionComponent, RouterLink],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  colorPalette = colorPalette;
  language = 'de';
  legalNoticeTranslation = translation['page']['legal-notice'];
  translationMenu = translation;
  isMenuHiding = true;
  isSmallScreen = window.innerWidth <= 560 ? 'smallest' : (window.innerWidth <= 1050 ? 'small' : 'normal');
  ellipse2Height = this.isSmallScreen === 'smallest' ? 320 : 370;
  ellipse2Width = this.isSmallScreen === 'smallest' ? 290 : 353;

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.langService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  toggleMenu(){
    this.isMenuHiding = this.isMenuHiding ? false : true;
  }

  @HostListener('window:resize')
  onResize() {
    this.isSmallScreen = window.innerWidth <= 560 ? 'smallest' : (window.innerWidth <= 1050 ? 'small' : 'normal');

    this.ellipse2Height = this.isSmallScreen === 'smallest' ? 320 : 370;
    this.ellipse2Width = this.isSmallScreen === 'smallest' ? 290 : 353;
  }
}
