import { Component, HostListener } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';
import { SvgImageModule } from '../../svg-images/svg-images';
import { NgClass } from '@angular/common';
import { colorPalette } from '../../color-palette';
import { translation } from '../../translation';
import { LanguageService } from '../../language-service';
import { LanguageSelectionComponent } from '../language-selection/language-selection.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-responsive-header',
  standalone: true,
  imports: [ RouterLink, LogoComponent, SvgImageModule, NgClass, LanguageSelectionComponent],
  templateUrl: './responsive-header.component.html',
  styleUrl: './responsive-header.component.scss'
})
export class ResponsiveHeaderComponent {
  colorPalette = colorPalette;
  language = 'de';
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

  isOpen = false;

}
