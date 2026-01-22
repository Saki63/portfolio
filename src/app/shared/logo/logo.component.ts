import { Component, Input } from '@angular/core';
// import { NgClass } from "@angular/common/index";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  imports: [ CommonModule]
})
export class LogoComponent {
  @Input() color: "primary" | "background" = "primary";

  isPrimary(): boolean{
    if (this.color === "primary"){
      return true;
    }
    return false;
  }
}
