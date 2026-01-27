import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgImageModule } from '../shared/svg-images/svg-images';
import { colorPalette } from '../shared/color-palette';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, SvgImageModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  activeTabIdx = 0;
  projects = [{
    title: "El Pollo Loco",
    duration: "5 weeks",
    description: [
      {
        title: "About the project",
        text: "A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.",
      }, 
      {
        title: "How I have organised my work process",
        text: "How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
      },
      {
        title: "What I have learnt",
        text: "As someone who is always trying to learn new technologies, you may have enjoyed working on this project because it allowed you to delve deep into a particular technology. Give details, such as the name of the framework or language you mean.",
      }
    ],
    picture: "",
    technologies: ['html', 'javascript', 'css'],
    serverUrl: "",
    githubUrl: "",
  },
  {
    title: "Join",
    duration: "2 month",
    description: [
      {
        title: "About the project",
        text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      }, 
      {
        title: "How I have organised my work process",
        text: "How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.",
      },
      {
        title: "What I have learnt",
        text: "As someone who is always trying to learn new technologies, you may have enjoyed working on this project because it allowed you to delve deep into a particular technology. Give details, such as the name of the framework or language you mean.",
      }
    ],
    picture: "",
    technologies: ['html', 'javascript', 'css'],
    serverUrl: "",
    githubUrl: "",
  },
  {
    title: "Ongoing Project",
    duration: "",
    description: [
      {
        title: "About the project",
        text: "What are you currently working on and what features are you implementing? What is the key to success in your projects? You can mention good planning, code quality and execution. Show a desire to learn new technologies and continually improve your skills.",
      }
    ],
    picture: "",
    technologies: ['angular', 'typescript', 'html', 'javascript', 'css'],
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
    return `Duration:  ${duration}`;
  }

  changeTab(){
    this.activeTabIdx = 1;
  }
}
