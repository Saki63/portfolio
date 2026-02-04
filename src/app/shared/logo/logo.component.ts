import { Component, Input } from '@angular/core';
// import { NgClass } from "@angular/common/index";
import { CommonModule } from '@angular/common';
import { SvgImageModule } from '../svg-images/svg-images';
import { translation, language } from '../translation'

@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  imports: [ CommonModule, SvgImageModule ]
})
export class LogoComponent {
  translation = translation;
  language = language;
  @Input() color = "currentColor";
  @Input() animation = false;
}
