import { Component } from '@angular/core';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { colorPalette } from '../shared/color-palette';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [SvgImageModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  colorPalette = colorPalette;
}

