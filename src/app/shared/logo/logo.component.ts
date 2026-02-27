import { Component, Input, SimpleChanges } from '@angular/core';
// import { NgClass } from "@angular/common/index";
import { CommonModule } from '@angular/common';
import { SvgImageModule } from '../svg-images/svg-images';
import { translation } from '../translation'

@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  imports: [ CommonModule, SvgImageModule ]
})  
export class LogoComponent {
  translation = translation;
  @Input() lan = 'de';
  @Input() color = "currentColor";
  @Input() animation = false;
}
