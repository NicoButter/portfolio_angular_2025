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
      title: 'Recinto Virtual',
      image: 'assets/images/dev_recinto_virtual.png',
      description: 'Recito Virtual de la provincia de Santa Cruz...',
      details: 'Explicación detallada sobre el desarrollo 1...',
    },
    {
      title: 'Tablero de resultados',
      image: 'assets/images/dev_tablero_resultados_1.png',
      description: 'Tablero de votación para el recinto de la Legislatura de...',
      details: 'Explicación detallada sobre el desarrollo 2...',
    },
    {
      title: 'El Almacen',
      image: 'assets/images/dev_el_almacen.png',
      description: 'Sistema de gestión para almacenes de barrio...',
      details: 'Explicación detallada sobre el desarrollo 2...',
    },
    {
      title: 'El Recetario',
      image: 'assets/images/dev_el_recetario.png',
      description: 'Proyecto fullstack (django) para Codo a Codo 4.0...',
      details: 'Explicación detallada sobre el desarrollo 2...',
    },
    {
      title: 'LibroLink',
      image: 'assets/images/dev_librolink.png',
      description: 'Sistema de getión de bibliotecas y hemerotecas...',
      details: 'Explicación detallada sobre el desarrollo 2...',
    },
    {
      title: 'Tablero de resultados',
      image: 'assets/images/dev_tablero_resultados_1.png',
      description: 'Tablero de votación para el recinto de la Legislatura de...',
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
