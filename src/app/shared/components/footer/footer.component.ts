import { Component, HostListener } from '@angular/core';
import { SvgImageModule } from "../../svg-images/svg-images";
import { LogoComponent } from '../../logo/logo.component';
import { colorPalette } from '../../color-palette';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SvgImageModule, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  colorPalette = colorPalette;

  isSmallScreen = window.innerWidth <= 480;

  @HostListener('window:resize')
  onResize() {
    this.isSmallScreen = window.innerWidth <= 480;
  }
}
