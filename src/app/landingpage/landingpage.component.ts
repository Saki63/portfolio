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
  isSmallScreen = window.innerWidth <= 480 ? 'smallest' : (window.innerWidth <= 1000 ? 'small' : 'normal');
  ellipse1Height = this.isSmallScreen === 'smallest' ? 320 : (this.isSmallScreen === 'small' ? 513 : 641);
  ellipse1Width = this.isSmallScreen === 'smallest' ? 290 : (this.isSmallScreen === 'small' ? 464 : 580);
  
  @HostListener('window:resize')
  onResize() {
    this.isSmallScreen = window.innerWidth <= 480 ? 'smallest' : (window.innerWidth <= 1000 ? 'small' : 'normal');

    this.ellipse1Height = this.isSmallScreen === 'smallest' ? 320 : (this.isSmallScreen === 'small' ? 513 : 641);
    this.ellipse1Width = this.isSmallScreen === 'smallest' ? 290 : (this.isSmallScreen === 'small' ? 464 : 580);
  }
}
