import { Component, HostListener } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { colorPalette } from '../shared/color-palette';
import { NavigationBarComponent } from '../shared/components/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavigationBarComponent, LogoComponent, SvgImageModule],
  templateUrl: './landingpage.component.html',
  styleUrls: ['../../styles.scss', './landingpage.component.scss', '../shared/scss/button.scss']
})
export class LandingpageComponent {
  colorPalette = colorPalette;
  ellips1Size = 600;
  isSmallScreen = window.innerWidth <= 480 ? 'smallest' : (window.innerWidth <= 1000 ? 'small' : 'normal');

  @HostListener('window:resize')
  onResize() {
    this.isSmallScreen = window.innerWidth <= 480 ? 'smallest' : (window.innerWidth <= 1000 ? 'small' : 'normal');

    this.ellips1Size = this.isSmallScreen === 'smallest' ? 300 : (this.isSmallScreen === 'small' ? 500 : 600);
  }


}
