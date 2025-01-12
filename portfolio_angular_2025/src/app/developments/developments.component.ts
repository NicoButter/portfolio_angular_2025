import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-developments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './developments.component.html',
  styleUrl: './developments.component.css'
})
export class DevelopmentsComponent {
  isModalOpen = false;
  selectedDevelopment: any;

  // Definir los desarrollos aquí
  developments = [
    {
      title: 'Desarrollo 1',
      image: 'ruta-a-la-imagen1.jpg',
      description: 'Breve descripción del desarrollo 1...',
      details: 'Explicación detallada sobre el desarrollo 1...',
    },
    {
      title: 'Desarrollo 2',
      image: 'ruta-a-la-imagen2.jpg',
      description: 'Breve descripción del desarrollo 2...',
      details: 'Explicación detallada sobre el desarrollo 2...',
    }
  ];

  // Abre la modal con los detalles del desarrollo seleccionado
  openModal(development: any) {
    this.selectedDevelopment = development;
    this.isModalOpen = true;
  }

  // Cierra la modal
  closeModal() {
    this.isModalOpen = false;
  }

}
