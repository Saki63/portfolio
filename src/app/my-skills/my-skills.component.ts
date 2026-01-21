import { Component, HostListener } from '@angular/core';
import { SvgImageModule } from '../shared/svg-images/svg-images';

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

  @HostListener('window:resize')
  onResize() {
    this.isSmallScreen = window.innerWidth <= 480;

    this.iconSize = this.isSmallScreen ? 45 : 60;
  }
}
