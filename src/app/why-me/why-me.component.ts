import { Component } from '@angular/core';
import { SvgImageModule } from '../shared/svg-images/svg-images';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [SvgImageModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {

}

