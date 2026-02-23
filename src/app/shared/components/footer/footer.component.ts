import { Component, HostListener, Input } from '@angular/core';
import { SvgImageModule } from "../../svg-images/svg-images";
import { LogoComponent } from '../../logo/logo.component';
import { colorPalette } from '../../color-palette';
import { translation } from '../../translation';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SvgImageModule, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  colorPalette = colorPalette;
  
  translation = translation;
  @Input() language = 'en';

  isSmallScreen = window.innerWidth <= 480;

  @HostListener('window:resize')
  onResize() {
    this.isSmallScreen = window.innerWidth <= 480;
  }
}
