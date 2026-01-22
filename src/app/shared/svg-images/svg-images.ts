import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconAngular, IconCSS, IconFirebase, IconHTML, IconJavaScript, IconMaterialDesign, IconRestApi, IconScrum, IconTypeScript } from './technologies/technologies.component';
import { IconEmail, IconGitHub, IconLinkedIn } from './links/links.component';
import { ImgEllips1 } from './backgrounds/backgrounds.component';
import { ImgArrow, ImgBurgerMenu } from './other/other.component';

@NgModule({
  declarations: [
    IconAngular,
    IconTypeScript,
    IconHTML,
    IconCSS,
    IconJavaScript,
    IconFirebase,
    IconMaterialDesign,
    IconScrum,
    IconRestApi,
    IconEmail,
    IconGitHub,
    IconLinkedIn,
    ImgEllips1,
    ImgArrow,
    ImgBurgerMenu
  ],
  imports: [CommonModule],
  exports: [
    IconAngular,
    IconTypeScript,
    IconHTML,
    IconCSS,
    IconJavaScript,
    IconFirebase,
    IconMaterialDesign,
    IconScrum,
    IconRestApi,
    IconEmail,
    IconGitHub,
    IconLinkedIn,
    ImgEllips1,
    ImgArrow,
    ImgBurgerMenu
  ]
})
export class SvgImageModule {}