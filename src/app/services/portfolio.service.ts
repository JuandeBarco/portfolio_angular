import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, Skill, ContactInfo } from '../models/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    const projects: Project[] = [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Una plataforma completa de comercio electrónico construida con Angular y Node.js',
        technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
        imageUrl: 'https://via.placeholder.com/400x250/2196F3/ffffff?text=E-commerce',
        githubUrl: 'https://github.com/tu-usuario/ecommerce',
        liveUrl: 'https://ecommerce-demo.com'
      },
      {
        id: 2,
        title: 'Task Management App',
        description: 'Aplicación de gestión de tareas con funcionalidades avanzadas de colaboración',
        technologies: ['Angular', 'Firebase', 'Angular Material'],
        imageUrl: 'https://via.placeholder.com/400x250/4CAF50/ffffff?text=Task+App',
        githubUrl: 'https://github.com/tu-usuario/task-app'
      },
      {
        id: 3,
        title: 'Weather Dashboard',
        description: 'Dashboard del clima con visualizaciones interactivas y datos en tiempo real',
        technologies: ['Angular', 'Chart.js', 'OpenWeather API'],
        imageUrl: 'https://via.placeholder.com/400x250/FF9800/ffffff?text=Weather+App',
        liveUrl: 'https://weather-dashboard.com'
      }
    ];
    return of(projects);
  }

  getSkills(): Observable<Skill[]> {
    const skills: Skill[] = [
      { name: 'Angular', level: 90, category: 'frontend' },
      { name: 'TypeScript', level: 85, category: 'frontend' },
      { name: 'JavaScript', level: 90, category: 'frontend' },
      { name: 'HTML/CSS', level: 95, category: 'frontend' },
      { name: 'Node.js', level: 80, category: 'backend' },
      { name: 'Express.js', level: 75, category: 'backend' },
      { name: 'MongoDB', level: 70, category: 'database' },
      { name: 'PostgreSQL', level: 65, category: 'database' },
      { name: 'Git', level: 85, category: 'tools' },
      { name: 'Docker', level: 60, category: 'tools' },
      { name: 'AWS', level: 55, category: 'tools' }
    ];
    return of(skills);
  }

  getContactInfo(): Observable<ContactInfo> {
    const contact: ContactInfo = {
      email: 'juan@example.com',
      linkedin: 'https://linkedin.com/in/juandebarco',
      github: 'https://github.com/juandebarco',
      phone: '+1 (555) 123-4567'
    };
    return of(contact);
  }
}
