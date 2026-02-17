import { Component, HostListener, Input } from '@angular/core';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { colorPalette } from '../shared/color-palette';
import { translation } from '../shared/translation';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [SvgImageModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  isSmallScreen = window.innerWidth <= 480;
  iconSize = 60;
  translation = translation;
  colorPalette = colorPalette;

  @Input() language = 'en';

  
  @HostListener('window:resize')
  onResize() {
    this.isSmallScreen = window.innerWidth <= 480;

    this.iconSize = this.isSmallScreen ? 45 : 60;
  }
}
