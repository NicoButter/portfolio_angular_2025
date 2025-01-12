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
      title: 'Tablero de resultados',
      image: 'assets/images/dev_tablero_resultados_1.png',
      description: 'Tablero de votación para el recinto de la Legislatura de...',
      details: 'Explicación detallada sobre el desarrollo 2...',
    },
    {
      title: 'Tablero de resultados',
      image: 'assets/images/dev_tablero_resultados_1.png',
      description: 'Tablero de votación para el recinto de la Legislatura de...',
      details: 'Explicación detallada sobre el desarrollo 2...',
    },
    {
      title: 'Tablero de resultados',
      image: 'assets/images/dev_tablero_resultados_1.png',
      description: 'Tablero de votación para el recinto de la Legislatura de...',
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
