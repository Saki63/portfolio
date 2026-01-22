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