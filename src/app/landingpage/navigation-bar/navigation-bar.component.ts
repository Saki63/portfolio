import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { colorPalette } from '../../shared/color-palette';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [ LogoComponent ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {  
  colorPalette = colorPalette;
}
