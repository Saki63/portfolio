import { Component, Input } from '@angular/core';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { colorPalette } from '../shared/color-palette';
import { translation } from '../shared/translation';


@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [SvgImageModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  colorPalette = colorPalette;
  translation = translation;
  @Input() language = 'en';
}

