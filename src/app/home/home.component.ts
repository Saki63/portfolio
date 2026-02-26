import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LandingpageComponent } from "../landingpage/landingpage.component";
import { NavigationBarComponent } from "../shared/components/navigation-bar/navigation-bar.component";
import { SectionComponent } from "../section/section.component";
import { WhyMeComponent } from "../why-me/why-me.component";
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { MyProjectsComponent } from "../my-projects/my-projects.component";
import { ReferencesComponent } from "../references/references.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";
import { LanguageService } from '../shared/language-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingpageComponent, NavigationBarComponent, SectionComponent, WhyMeComponent, MySkillsComponent, MyProjectsComponent, ReferencesComponent, ContactMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  language = 'de';

  constructor(private langService: LanguageService) {}

  ngOnInit() {
    this.langService.language$.subscribe(lang => {
      this.language = lang;
    });
  }
}
