import { Component } from '@angular/core';
import { SvgImageModule } from '../shared/svg-images/svg-images';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [SvgImageModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss', '../shared/scss/button.scss']
})
export class ContactMeComponent {

}
