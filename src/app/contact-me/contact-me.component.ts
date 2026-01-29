import { Component } from '@angular/core';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { colorPalette } from '../shared/color-palette';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [SvgImageModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss', '../shared/scss/button.scss']
})
export class ContactMeComponent {
  colorPalette = colorPalette;
  hoverEmail = false;
  hoverPhone = false;
}
