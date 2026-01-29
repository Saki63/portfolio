import { Component } from '@angular/core';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { colorPalette } from '../shared/color-palette';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [SvgImageModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss', '../shared/scss/button.scss']
})
export class ContactMeComponent {
  colorPalette = colorPalette;
  hoverEmail = false;
  hoverPhone = false;
  checkboxState = 'default';

  checkboxEventHandler(event: string){
    if(event === 'over' && this.checkboxState !== 'checked' && this.checkboxState !== 'error'){
      console.log('over');
      this.checkboxState = 'hover';
    } else if (event === 'leave' && this.checkboxState !== 'checked' && this.checkboxState !== 'error'){
      console.log('leave');
      this.checkboxState = 'default';
    } else if (event === 'click'){
      console.log('check');
      this.checkboxState = this.checkboxState ==='checked' ? 'default' : 'checked';
    }
  }
}
