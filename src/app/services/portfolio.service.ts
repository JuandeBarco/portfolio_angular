import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, Skill, ContactInfo, WorkExperience } from '../models/portfolio.interface';

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
      { name: 'Vue JS', level: 90, category: 'frontend' },
      { name: 'Angular', level: 75, category: 'frontend' },
      { name: 'Expo (React Native)', level: 60, category: 'frontend' },
      { name: 'Flutter', level: 50, category: 'frontend' },
      { name: 'Blade', level: 95, category: 'frontend' },
      { name: 'Laravel', level: 100, category: 'backend' },
      { name: 'Nest JS', level: 50, category: 'backend' },
      { name: 'MySQL', level: 95, category: 'database' },
      { name: 'SQL Server', level: 90, category: 'database' },
      { name: 'PostgreSQL', level: 90, category: 'database' },
      { name: 'Git', level: 85, category: 'tools' },
      { name: 'Docker', level: 50, category: 'tools' },
      { name: 'AWS', level: 30, category: 'tools' },
      { name: 'Linux', level: 90, category: 'tools' }
    ];
    return of(skills);
  }

  getContactInfo(): Observable<ContactInfo> {
    const contact: ContactInfo = {
      email: 'jddbarco@gmail.com',
      linkedin: 'https://linkedin.com/in/juande-barco',
      github: 'https://github.com/juandebarco',
      phone: '+52 XXX XXX XXXX'
    };
    return of(contact);
  }

  getWorkExperience(): Observable<WorkExperience[]> {
    const experience: WorkExperience[] = [
      {
        id: 1,
        position: 'Technical Lead',
        company: 'OPD Servicios de Salud Jalisco',
        location: 'Guadalajara, México',
        startDate: '2025-01',
        isCurrent: true,
        description: 'Full stack development and technical leadership for the development team.',
        achievements: [
          'Collaborated with the product team to define the technical requirements and architecture of the applications.',
          'Developed and maintained a web application using Laravel and Angular.',
          'Developed and maintained a mobile application using React Native and Flutter.',
          'Tech lead for the development team.'
        ],
        technologies: ['Laravel', 'Angular', 'Node.js', 'Expo (React Native)', 'Flutter', 'MariaDB', 'Linux']
      },
      {
        id: 2,
        position: 'Software developer mid-level',
        company: 'Secretaría de Administración Jalisco',
        location: 'Guadalajara, México',
        startDate: '2021-09',
        endDate: '2024-12',
        isCurrent: false,
        description: 'Developed and maintained web applications and APIs, working in a team with designers and product managers.',
        achievements: [
          'Developed 5 web applications that were used by 1000+ users.',
          'Optimized the performance of the main application by at least 50%',
          'Created dashboards to monitor the performance of the applications.',
          'Implemented JWT authentication and role-based authorization for APIs',
          'Mentored 2 junior developers' 
        ],
        technologies: ['Laravel', 'Nest JS', 'jQuery', 'Livewire', 'Bootstrap', 'MySQL', 'Linux']
      },
      {
        id: 3,
        position: 'Software developer junior',
        company: 'Huezo\'s Shrimp Farm',
        location: 'Manzanillo, México (Remote)',
        startDate: '2018-09',
        endDate: '2020-08',
        isCurrent: false,
        description: 'Developed a web application to manage the farm and the internal traceability of the shrimp.',
        achievements: [
          'Integration with a sensor based system to monitor the temperature, pH, and other parameters of the shrimp',
          'Integrated a notification system to send notifications to the farmers when something is wrong with the shrimp',
          'Created a dashboard to monitor the farm and the shrimp',
          'Created a system to manage the inventory of the farm'
        ],
        technologies: ['CodeIgniter', 'Python', 'JavaScript', 'Bootstrap', 'MySQL', 'Arduino']
      },
      {
        id: 4,
        position: 'Software developer intern',
        company: 'Peña Colorada Mine',
        location: 'Colima, México',
        startDate: '2018-02',
        endDate: '2018-08',
        isCurrent: false,
        description: 'Internship to develop and maintain web applications and APIs for the IT department of the mine.',
        achievements: [
          'Created a web application to manage the inventory of the IT department',
          'Created a web application to register the maintenance of the vehicles of the mine',
          'Technical support by help desk to the employees'
        ],
        technologies: ['CodeIgniter', 'JavaScript', 'Bootstrap', 'MySQL']
      }
    ];
    return of(experience);
  }
}
