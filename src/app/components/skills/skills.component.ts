import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../models/portfolio.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressBarModule, MatChipsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  skillCategories = ['frontend', 'backend', 'database', 'tools'];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {
    this.portfolioService.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  getCategoryTitle(category: string): string {
    const titles: { [key: string]: string } = {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Base de Datos',
      tools: 'Herramientas'
    };
    return titles[category] || category;
  }
}
