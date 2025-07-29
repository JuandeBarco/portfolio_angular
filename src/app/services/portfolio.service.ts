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

  getWorkExperience(): Observable<WorkExperience[]> {
    const experience: WorkExperience[] = [
      {
        id: 1,
        position: 'Jefe Técnico',
        company: 'TechCorp Solutions',
        location: 'Ciudad de México, México',
        startDate: '2023-01',
        isCurrent: true,
        description: 'Lidero el equipo de desarrollo de 8 ingenieros, estableciendo estándares de código, arquitecturas escalables y mejores prácticas de desarrollo.',
        achievements: [
          'Reduje el tiempo de deployment en un 60% implementando CI/CD',
          'Mentoreé a 5 desarrolladores junior que ahora son mid-level',
          'Implementé arquitectura de microservicios que mejoró la escalabilidad',
          'Establecí procesos de code review que redujeron bugs en producción en un 40%'
        ],
        technologies: ['Angular', 'Node.js', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Git', 'Jenkins']
      },
      {
        id: 2,
        position: 'Desarrollador Full Stack Senior',
        company: 'Digital Innovations',
        location: 'Guadalajara, México',
        startDate: '2021-03',
        endDate: '2022-12',
        isCurrent: false,
        description: 'Desarrollé aplicaciones web complejas y APIs RESTful, trabajando en equipo con diseñadores y product managers.',
        achievements: [
          'Desarrollé 3 aplicaciones web que generaron $2M en ingresos',
          'Optimicé el rendimiento de la aplicación principal en un 70%',
          'Implementé autenticación JWT y autorización basada en roles',
          'Mentoreé a 2 desarrolladores junior'
        ],
        technologies: ['Angular', 'React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Docker']
      },
      {
        id: 3,
        position: 'Desarrollador Frontend',
        company: 'StartupXYZ',
        location: 'Monterrey, México',
        startDate: '2019-06',
        endDate: '2021-02',
        isCurrent: false,
        description: 'Especializado en desarrollo frontend con Angular, creando interfaces de usuario intuitivas y responsivas.',
        achievements: [
          'Desarrollé 5 componentes reutilizables que aceleraron el desarrollo',
          'Implementé lazy loading que mejoró el tiempo de carga en un 50%',
          'Integré APIs de terceros para funcionalidades de pago',
          'Participé en el diseño de la arquitectura frontend'
        ],
        technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'Sass', 'Jest']
      },
      {
        id: 4,
        position: 'Desarrollador Freelance',
        company: 'Independiente',
        location: 'Remoto',
        startDate: '2018-01',
        endDate: '2019-05',
        isCurrent: false,
        description: 'Desarrollé proyectos web para diversos clientes, desde sitios web corporativos hasta aplicaciones complejas.',
        achievements: [
          'Completé 15+ proyectos exitosos para diferentes industrias',
          'Desarrollé e-commerce que generó $500K en ventas',
          'Creé sistema de gestión de inventario para empresa manufacturera',
          'Mantuve 100% de satisfacción del cliente'
        ],
        technologies: ['Angular', 'JavaScript', 'HTML/CSS', 'Node.js', 'MongoDB', 'Firebase']
      }
    ];
    return of(experience);
  }
}
