import { colorPalette } from '../../../shared/color-palette';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';
import { SvgImageModule } from '../../svg-images/svg-images';
import {translation} from '../../translation';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [LogoComponent, SvgImageModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {  
  colorPalette = colorPalette;
  translation = translation;
  @Input() language = 'de';
  @Output() newLanguage = new EventEmitter<'de' | 'en'>();

  switchLanguage(selected: 'de' | 'en') {
    this.newLanguage.emit(selected);
  }
}
