import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { colorPalette } from '../shared/color-palette';
import { translation } from '../shared/translation';
import { LanguageSelectionComponent } from "../shared/components/language-selection/language-selection.component";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [LogoComponent, SvgImageModule, LanguageSelectionComponent, NgClass],
  templateUrl: './landingpage.component.html',
  styleUrls: ['../../styles.scss', './landingpage.component.scss']
})
export class LandingpageComponent {
  colorPalette = colorPalette;
  translation = translation;
  @Input() language = 'de';
  @Output() newLanguage = new EventEmitter<'de' | 'en'>();

  switchLanguage(selected: 'de' | 'en') {
    this.newLanguage.emit(selected);
  }
  
  hoverPic = false;
  isMenuHiding = true;

  isSmallScreen = window.innerWidth <= 560 ? 'smallest' : (window.innerWidth <= 1050 ? 'small' : 'normal');

  ellipse1Height = this.isSmallScreen === 'smallest' ? 320 : (this.isSmallScreen === 'small' ? 513 : 641);
  ellipse1Width = this.isSmallScreen === 'smallest' ? 290 : (this.isSmallScreen === 'small' ? 464 : 580);
  
  ellipse2Height = this.isSmallScreen === 'smallest' ? 320 : 370;
  ellipse2Width = this.isSmallScreen === 'smallest' ? 290 : 353;

  @HostListener('window:resize')
  onResize() {
    this.isSmallScreen = window.innerWidth <= 560 ? 'smallest' : (window.innerWidth <= 1050 ? 'small' : 'normal');

    this.ellipse1Height = this.isSmallScreen === 'smallest' ? 310 : (this.isSmallScreen === 'small' ? 513 : 641);
    this.ellipse1Width = this.isSmallScreen === 'smallest' ? 280 : (this.isSmallScreen === 'small' ? 464 : 580);

    this.ellipse2Height = this.isSmallScreen === 'smallest' ? 320 : 370;
    this.ellipse2Width = this.isSmallScreen === 'smallest' ? 290 : 353;
  }

  toggleMenu(){
    this.isMenuHiding = this.isMenuHiding ? false : true;
  }
}
