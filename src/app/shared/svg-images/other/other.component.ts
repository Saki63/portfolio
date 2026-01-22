import { Component } from '@angular/core';
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