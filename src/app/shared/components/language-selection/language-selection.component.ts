import { colorPalette } from '../../../shared/color-palette';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgImageModule } from '../../svg-images/svg-images';
import {translation} from '../../translation';
import { NgClass } from "@angular/common";
import { LanguageService } from '../../language-service';

@Component({
  selector: 'app-language-selection',
  standalone: true,
  imports: [SvgImageModule, NgClass],
  templateUrl: './language-selection.component.html',
  styleUrl: './language-selection.component.scss'
})
export class LanguageSelectionComponent {  
  colorPalette = colorPalette;
  language = 'de';
  translation = translation;

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.langService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  switchLanguage() {
    const newLang = this.language === 'de' ? 'en' : 'de';
    this.langService.setLanguage(newLang);
  }
}