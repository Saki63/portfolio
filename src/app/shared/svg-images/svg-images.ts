import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconAngular, IconCSS, IconFirebase, IconHTML, IconJavaScript, IconMaterialDesign, IconRestApi, IconScrum, IconTypeScript } from './technologies/technologies.component';
import { IconEmail, IconGitHub, IconLinkedIn } from './links/links.component';
import { ImgEllipse1, ImgEllipse2, ImgEllipse3, ImgEllipse4 } from './backgrounds/backgrounds.component';
import { IconEmail1, IconPhone, IconPortfolio, ImgArrow, ImgBurgerMenu } from './other/other.component';

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
    ImgEllipse1,
    ImgArrow,
    ImgBurgerMenu,
    ImgEllipse2,
    IconPortfolio,
    IconEmail1,
    IconPhone,
    ImgEllipse3,
    ImgEllipse4
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
    ImgEllipse1,
    ImgArrow,
    ImgBurgerMenu,
    ImgEllipse2,
    IconPortfolio,
    IconEmail1,
    IconPhone,
    ImgEllipse3,
    ImgEllipse4
  ]
})
export class SvgImageModule {}