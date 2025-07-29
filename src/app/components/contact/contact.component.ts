import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { ContactInfo } from '../../models/portfolio.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactInfo: ContactInfo | null = null;
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadContactInfo();
  }

  loadContactInfo(): void {
    this.portfolioService.getContactInfo().subscribe(contact => {
      this.contactInfo = contact;
    });
  }

  submitForm(): void {
    // Aquí puedes implementar la lógica para enviar el formulario
    console.log('Formulario enviado:', this.contactForm);
    // Reset form
    this.contactForm = { name: '', email: '', message: '' };
  }
}
