import { Component, Input } from '@angular/core';
import { BaseImageComponent } from '../base-image.component';

@Component({
  selector: 'app-img-arrow',
  templateUrl: './svgs/arrow-img.component.html',
  styleUrl: './other.component.scss'
})
export class ImgArrow extends BaseImageComponent {}

@Component({
  selector: 'app-img-burger-menu',
  templateUrl: './svgs/burger-menu-img.component.html',
  styleUrl: './other.component.scss'
})
export class ImgBurgerMenu extends BaseImageComponent {}

@Component({
  selector: 'app-img-logo',
  templateUrl: './svgs/logo-img.component.html',
  styleUrls: ['./other.component.scss', './svgs/logo-img.component.scss']
})
export class IconPortfolio extends BaseImageComponent {
  @Input() animation = false;
}