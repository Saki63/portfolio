import { Component } from '@angular/core';
import { BaseImageComponent } from '../base-image.component';

@Component({
  selector: 'app-icon-email',
  templateUrl: './svgs/email-icon.component.html',
  styleUrl: './links.component.scss'
})
export class IconEmail extends BaseImageComponent {}

@Component({
  selector: 'app-icon-github',
  templateUrl: './svgs/github-icon.component.html',
  styleUrl: './links.component.scss'
})
export class IconGitHub extends BaseImageComponent {}

@Component({
  selector: 'app-icon-linkedin',
  templateUrl: './svgs/linkedin-icon.component.html',
  styleUrl: './links.component.scss'
})
export class IconLinkedIn extends BaseImageComponent {}

@Component({
  selector: 'app-icon-email-light',
  templateUrl: './svgs/light-email-icon.component.html',
  styleUrl: './links.component.scss'
})
export class IconEmailLight extends BaseImageComponent {}

@Component({
  selector: 'app-icon-github-light',
  templateUrl: './svgs/light-github-icon.component.html',
  styleUrl: './links.component.scss'
})
export class IconGitHubLight extends BaseImageComponent {}

@Component({
  selector: 'app-icon-linkedin-light',
  templateUrl: './svgs/light-linkedin-icon.component.html',
  styleUrl: './links.component.scss'
})
export class IconLinkedInLight extends BaseImageComponent {}