import { Component } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LogoComponent } from '../shared/logo/logo.component';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { colorPalette } from '../shared/color-palette';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavigationBarComponent, LogoComponent, SvgImageModule],
  templateUrl: './landingpage.component.html',
  styleUrls: ['../../styles.scss', './landingpage.component.scss', '../shared/scss/button.scss']
})
export class LandingpageComponent {
  colorPalette = colorPalette;
}
