import { Component, Input } from '@angular/core';
// import { NgClass } from "@angular/common/index";
import { CommonModule } from '@angular/common';
import { SvgImageModule } from '../svg-images/svg-images';

@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  imports: [ CommonModule, SvgImageModule ]
})
export class LogoComponent {
  @Input() color = "currentColor";
  @Input() animation = false;
}
