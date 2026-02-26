import { colorPalette } from '../../../shared/color-palette';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';
import { SvgImageModule } from '../../svg-images/svg-images';
import {translation} from '../../translation';
import { LanguageSelectionComponent } from "../language-selection/language-selection.component";
import { LanguageService } from '../../language-service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [LogoComponent, SvgImageModule, LanguageSelectionComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {  
  colorPalette = colorPalette;
  language = 'de';
  translation = translation;

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.langService.language$.subscribe(lang => {
      this.language = lang;
    });
  }
}
