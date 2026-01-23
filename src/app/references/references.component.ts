import { Component } from '@angular/core';
import { BubbleComponent } from "./bubble/bubble.component";

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [BubbleComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

}
