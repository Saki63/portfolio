import { Component, HostListener, Input } from '@angular/core';
import { SvgImageModule } from "../../svg-images/svg-images";
import { LogoComponent } from '../../logo/logo.component';
import { colorPalette } from '../../color-palette';
import { translation } from '../../translation';
import { LanguageService } from '../../language-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SvgImageModule, LogoComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  isSmallScreen = window.innerWidth <= 480;
  colorPalette = colorPalette;
  language = 'de';
  translation = translation;

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.langService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.isSmallScreen = window.innerWidth <= 480;
  }
}
