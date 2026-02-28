import { Component, HostListener, Input, inject } from '@angular/core';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { colorPalette } from '../shared/color-palette';
import { translation } from '../shared/translation';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [SvgImageModule, FormsModule, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss', '../shared/scss/button.scss']
})
export class ContactMeComponent {
  colorPalette = colorPalette;
  hoverEmail = false;
  hoverPhone = false;
  checkboxState = 'default';

  http = inject(HttpClient);

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
      this.checkboxState = this.checkboxState === 'checked' ? 'error' : 'checked';
    }
  }

  checkboxChecked = false;

  // checkboxEventHandler(type: string) {
  //   if (type === 'click') {
  //     this.checkboxChecked = !this.checkboxChecked;
  //   }
  // }

  // onSubmit(form: any) {
  //   if (form.valid && this.checkboxChecked) {
  //     console.log(form.value);
  //   }
  // }

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = true; //nur zum Testen!!!!

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.checkboxState = 'default';
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) { //nur zum Testen!!!
      console.log(this.contactData);
      this.checkboxState = 'default';
      ngForm.resetForm();
    }
  }
}
