import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconAngularComponent, IconCSS, IconFirebase, IconHTML, IconJavaScript, IconMaterialDesign, IconRestApi, IconScrum, IconTypeScript } from './technologies/technologies.component';

@NgModule({
  declarations: [
    IconAngularComponent,
    IconTypeScript,
    IconHTML,
    IconCSS,
    IconJavaScript,
    IconFirebase,
    IconMaterialDesign,
    IconScrum,
    IconRestApi
  ],
  imports: [CommonModule],
  exports: [
    IconAngularComponent,
    IconTypeScript,
    IconHTML,
    IconCSS,
    IconJavaScript,
    IconFirebase,
    IconMaterialDesign,
    IconScrum,
    IconRestApi
  ]
})
export class SvgImageModule {}