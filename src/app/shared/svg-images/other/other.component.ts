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

@Component({
  selector: 'app-icon-email1',
  templateUrl: './svgs/email-icon.component.html',
  styleUrls: ['./other.component.scss']
})
export class IconEmail1 extends BaseImageComponent {}

@Component({
  selector: 'app-icon-phone',
  templateUrl: './svgs/phone-icon.component.html',
  styleUrls: ['./other.component.scss']
})
export class IconPhone extends BaseImageComponent {}

@Component({
  selector: 'app-img-location',
  templateUrl: './svgs/location-img.component.html',
  styleUrls: ['./other.component.scss']
})
export class ImgLocation extends BaseImageComponent {}

@Component({
  selector: 'app-img-location1',
  templateUrl: './svgs/location1-img.component.html',
  styleUrls: ['./other.component.scss']
})
export class ImgLocation1 extends BaseImageComponent {}

@Component({
  selector: 'app-img-bullet-point',
  templateUrl: './svgs/bullet-point-img.component.html',
  styleUrls: ['./other.component.scss']
})
export class ImgBulletPoint extends BaseImageComponent {}

@Component({
  selector: 'app-img-checkbox',
  templateUrl: './svgs/checkbox-img.component.html',
  styleUrls: ['./other.component.scss']
})
export class ImgCheckbox extends BaseImageComponent {
  @Input() state = 'default';
}