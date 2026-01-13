import { Component } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LogoComponent } from '../shared/logo/logo.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NavigationBarComponent, LogoComponent],
  templateUrl: './landingpage.component.html',
  styleUrls: ['../../styles.scss', './landingpage.component.scss']
})
export class LandingpageComponent {

}
