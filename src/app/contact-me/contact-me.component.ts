import { Component, HostListener, Input } from '@angular/core';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { colorPalette } from '../shared/color-palette';
import { translation } from '../shared/translation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [SvgImageModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss', '../shared/scss/button.scss']
})
export class ContactMeComponent {
  colorPalette = colorPalette;
  hoverEmail = false;
  hoverPhone = false;
  checkboxState = 'default';

  translation = translation;
  @Input() language = 'en';

  isSmallScreen = window.innerWidth <= 480;

  @HostListener('window:resize')
  onResize() {
    this.isSmallScreen = window.innerWidth <= 480;
  }

  checkboxEventHandler(event: string){
    if(event === 'over' && this.checkboxState !== 'checked' && this.checkboxState !== 'error'){
      this.checkboxState = 'hover';
    } else if (event === 'leave' && this.checkboxState !== 'checked' && this.checkboxState !== 'error'){
      this.checkboxState = 'default';
    } else if (event === 'click'){
      this.checkboxChecked = !this.checkboxChecked;
      this.checkboxState = this.checkboxState ==='checked' ? 'default' : 'checked';
    }
  }

  checkboxChecked = false;

  // checkboxEventHandler(type: string) {
  //   if (type === 'click') {
  //     this.checkboxChecked = !this.checkboxChecked;
  //   }
  // }

  onSubmit(form: any) {
    if (form.valid && this.checkboxChecked) {
      console.log(form.value);
    }
  }
}
