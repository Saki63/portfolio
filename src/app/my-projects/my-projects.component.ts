import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { colorPalette } from '../shared/color-palette';
import { translation } from '../shared/translation';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, SvgImageModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  translation = translation;
  @Input() language = 'en';

  technologies: Record<string, string> = {
    'angular': "Angular", 
    'css': "CSS",
    'firebase': "Firebase",
    'git': "Git",
    'html': "HTML",
    'javascript': "JavaScript",
    'material-design': "Material Design",
    'react': "React",
    'rest-api': "REST-API",
    'scrum': "Scrum",
    'typescript': "TypeScript",
    'vue': "Vue.js"
  };
  activeTabIdx = 0;
  projects = [{
    title: {
      en: "El Pollo Loco",
      de: "El Pollo Loco",
    },
    duration: {
      en: "5 weeks",
      de: "5 Wochen",
    },
    description: [
      {
        title: {
          en: "About the project",
          de: "Worum geht es",
        },
        text: {
          en: "El Pollo Loco is a classic jump-and-run game. The goal is to get past the crazed chickens and collect coins along the way.",
          de: "Bei El Pollo Loco handelt es sich um ein klassisches Jump-and-Run-Spiel. Ziel ist es an den verrückt gewordenen Hühnern vorbei zu kommen und dabei Münzen zu sammeln.",
        },
      }, 
      {
        title: {
          en: "How I have organised my work process",
          de: "Wie habe ich meine Arbeit organsiert"
        },
        text: {
          en: "To organize the project, I divided the overall task into small, clearly defined work packages and worked through them step by step. I used Trello for structuring and prioritizing, which gave me a transparent overview of the current progress at all times. This approach helped me stay focused and systematically implement complex requirements.",
          de: "Für die Organisation des Projekts habe ich die Gesamtaufgabe in kleine, klar definierte Arbeitspakete unterteilt und diese Schritt für Schritt abgearbeitet. Zur Strukturierung und Priorisierung habe ich Trello genutzt, wodurch ich jederzeit einen transparenten Überblick über den aktuellen Fortschritt hatte. Diese Vorgehensweise hat mir geholfen, fokussiert zu bleiben und komplexe Anforderungen systematisch umzusetzen.",
        },
      },
      {
        title: {
          en: "What I have learnt",
          de: "Was habe ich gelernt",
        },
        text: {
          en: "During the project, I further deepened my knowledge of object-oriented programming, particularly in the structured design of classes, clear responsibilities, and the use of inheritance to reuse common properties and methods. I also gained practical experience with HTML5 Canvas, especially in animations and the display of game elements.",
          de: "Im Projekt habe ich meine Kenntnisse in der objektorientierten Programmierung weiter vertieft, insbesondere im strukturierten Aufbau von Klassen, klaren Verantwortlichkeiten und dem Einsatz von Vererbung zur Wiederverwendung gemeinsamer Eigenschaften und Methoden. Zudem habe ich praktische Erfahrung mit dem HTML5-Canvas gesammelt, vor allem bei Animationen und der Darstellung von Spielelementen.",
        },
      }
    ],
    picture: "assets/img/el_pollo_loco_2.png",
    technologies: ['html', 'javascript', 'css'],
    serverUrl: "http://www.el-pollo-loco.anne-sanewski.de/",
    githubUrl: "https://github.com/Saki63/el_pollo_loco",
  },
  {
    title: {
      en: "Join",
      de: "Join",
    },
    duration: {
      en: "2 month",
      de: "2 Monate",
    },
    description: [
      {
        title: {
          en: "About the project",
          de: "Worum geht es"
        },
        text: {
          en: "Join is a project management tool that can be used to create, organize, and manage tasks. Tasks can also be assigned to individual people to facilitate teamwork.",
          de: "Join ist ein Projektmanagement-Tool, mit dem Aufgaben erstellt, organisiert und verwaltet werden können. Zudem lassen sich die Aufgaben einzelnen Personen zuweisen, um die Zusammenarbeit im Team zu erleichtern.",
        },
      }, 
      {
        title: {
          en: "How we have organised the work",
          de: "Wie wir uns organisierten"
        },
        text: {
          en: "The project was implemented by a team of three people. We used Trello to organize and distribute tasks. We used Git to collaborate on the code and worked on different branches to integrate changes securely. Regular meetings helped us keep track of everything: we clarified where everyone was at and what tasks were coming up next.",
          de: "Das Projekt wurde im Team von drei Personen umgesetzt. Zur Organisation und Aufgabenverteilung nutzten wir Trello. Für die gemeinsame Arbeit am Code verwendeten wir Git und wir arbeiteten auf unterschiedlichen Branches, um Änderungen sicher zu integrieren. Regelmäßige Besprechungen halfen uns dabei, den Überblick zu behalten: Wir klärten, wo jeder gerade steht und welche Aufgaben als Nächstes anstehen.",
        },
      },
      {
        title: {
          en: "What I have learnt",
          de: "Was habe ich gelernt",
        },
        text: {
          en: "During the project, I gained valuable experience in managing larger team projects, particularly in coordinating tasks and collaborating with multiple developers. At the same time, I further deepened my technical knowledge and applied it in a practical setting.",
          de: "Im Projekt konnte ich wertvolle Erfahrungen im Management größerer Teamprojekte sammeln, insbesondere in der Koordination von Aufgaben und der Zusammenarbeit mit mehreren Entwicklern. Gleichzeitig habe ich meine fachlichen Kenntnisse weiter vertieft und praxisnah angewendet.",
        },
      }
    ],
    picture: "assets/img/join.png",
    technologies: ['javascript', 'git', 'firebase'],
    serverUrl: "http://www.join.anne-sanewski.de/",
    githubUrl: "https://github.com/Saki63/join",
  },
  {
    title: {
      en: "Ongoing Project",
      de: "Derzeitige Projekte",
    },
    duration: {
      en: "?",
      de: "?",
    },
    description: [
      {
        title: {
          en: "About the project",
          de: "Worum geht es",
        },
        text: {
          en: "I am currently working on my portfolio, which I am implementing with Angular. The goal is to clearly present my skills and knowledge and give potential employers or clients a clear insight into my work.",
          de: "Derzeit arbeite ich an meinem Portfolio, das ich mit Angular umsetze. Ziel ist es, meine Fähigkeiten und Kenntnisse anschaulich zu präsentieren und potenziellen Arbeitgebern oder Kunden einen klaren Einblick in meine Arbeit zu geben.",
        },
      }

    ],
    picture: "",
    technologies: ['angular', 'typescript', 'firebase'],
    serverUrl: "",
    githubUrl: "",
  }];

  colorPalette = colorPalette;

  isSmallScreen = window.innerWidth <= 1000;

  @HostListener('window:resize')
  onResize() {
    this.isSmallScreen = window.innerWidth <= 1000;
  }

  getTabTitle(index: number, title: string){
    const number = index + 1;
    return `${number}. ${title}`;
  }

  getTabClass(index: number){
    if (index === this.activeTabIdx){
      return "active";
    }
    return "";
  }

  getProjectDuration(duration: string){
    if (this.language === 'de') { 
      return `Dauer:  ${duration}`;
    }
    return `Duration:  ${duration}`;
  }

  changeTab(index: number){
    this.activeTabIdx = index;
  }

  getTechnologiesTitles(){
    let tecList = this.language === 'en' ? "Technologies: " : "Technologien: ";
    const project = this.projects[this.activeTabIdx];
    const tecLength = project.technologies.length;
    for (let tecIdx = 0; tecIdx < tecLength; tecIdx++) {
      const technology = project.technologies[tecIdx];
      tecList += tecIdx === tecLength - 1 ? this.technologies[technology] : this.technologies[technology] + ", ";
    }

    return tecList;
  }


}
