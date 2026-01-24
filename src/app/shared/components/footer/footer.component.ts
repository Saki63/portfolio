import { Component } from '@angular/core';
import { SvgImageModule } from "../../svg-images/svg-images";
import { LogoComponent } from '../../logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SvgImageModule, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
