import { colorPalette } from '../../../shared/color-palette';
import { Component } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';
import { SvgImageModule } from '../../svg-images/svg-images';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [ LogoComponent, SvgImageModule ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {  
  colorPalette = colorPalette;
}
