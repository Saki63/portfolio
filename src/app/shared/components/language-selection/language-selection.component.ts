import { colorPalette } from '../../../shared/color-palette';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgImageModule } from '../../svg-images/svg-images';
import {translation} from '../../translation';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-language-selection',
  standalone: true,
  imports: [SvgImageModule, NgClass],
  templateUrl: './language-selection.component.html',
  styleUrl: './language-selection.component.scss'
})
export class LanguageSelectionComponent {  
  colorPalette = colorPalette;
  translation = translation;

  @Input() language = 'de';
  @Output() newLanguage = new EventEmitter<'de' | 'en'>();

  switchLanguage(selected: 'de' | 'en') {
    this.newLanguage.emit(selected);
  }
}