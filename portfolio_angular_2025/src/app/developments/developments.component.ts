import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
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

  developments = [
    {
      title: 'Recinto Virtual',
      image: 'assets/images/dev_recinto_virtual.png',
      description: 'Recito Virtual de la provincia de Santa Cruz...',
      details: 'Sistema realizado para que la Legislatura Provincial pudiera sesionar durante el periodo de la pandemia, permite a los legisladores a dar el presente, seguir la sesión y votar desde su lugar de resguardo. Permite a las autoridades a presidir la sesión. Realizado en PHP y MySQL con el Framework ScriptCase y servido en un VPS. 2020 ',
    },
    {
      title: 'Tablero de resultados',
      image: 'assets/images/dev_tablero_resultados_1.png',
      description: 'Tablero de resultados de votación para el recinto de la Legislatura de...',
      details: 'Tablero de resultados de votación para la Legislatura Provincial. Complemento para el Recinto y para el Recinto Virtual. Capaz de ser transmitido por el streaming oficial de cada sesión. Realizado en PHP y MySQL. 2020',
    },
    {
      title: 'El Almacen',
      image: 'assets/images/dev_el_almacen.png',
      description: 'Sistema de gestión para almacenes de barrio...',
      details: 'Sistema para la administración de pequeños negocios. Permite el control de stock, la generacion de QR para indexar productos, scanner de QR ingreso de productos por comando de voz. Genera detalles de compra y es capaz de enviarlos via Whatsaap o email. Genera reportes de venta por periodos de tiempo dedfinidos por el usuario. Permite agregar un detalle de cada producto inclusive su imagen. Permite el control de cuetas corrientes para clientes (fiado). Realizado con django y PostgreSQL. 2024',
    },
    {
      title: 'El Recetario',
      image: 'assets/images/dev_el_recetario.png',
      description: 'Proyecto fullstack (django) para Codo a Codo 4.0...',
      details: 'Proyecto realizado en python con django. Trabajo final integrador de la curricula del curso Fullstack developer Jr. de la academia Codo a Codo 4.0. Es un sistema que permite ver ultimas recetas, ver recetas de cada chef (integrante del grupo). Consume una API que permite buscar palabras clave para encontrar recetas. Realizado en grupo. <a href="https://nicobutter.github.io/codoacoco_23533__G8_el_recetario/" target="_blank">Ver Proyecto</a>. 2023.',
    },
    {
      title: 'LibroLink',
      image: 'assets/images/dev_librolink.png',
      description: 'Sistema de getión de bibliotecas y hemerotecas...',
      details: 'Sistema de gestión de bibliotecas y hemerotecas. Gestiona libros, revistas y diarios de la biblioteca como también sus afiliados y empleados. Gestiona préstamos y alquileres. Realizado en django y PostgreSQL. 2023.',
    },
    {
      title: 'GJ Paramotor',
      image: 'assets/images/dev_gjparamotor.png',
      description: 'WEB Site para la escuela de paramotor GJ...',
      details: 'WEB Page para la escuela de Paramotor GJ (USA). <a href="https://www.gjparamotor.com/" target="_blank">Ver Proyecto</a>. Realizada en Angular. 2024.',
    },
    {
      title: 'AR Servicios',
      image: 'assets/images/dev_arservicios.png',
      description: 'WEB Site para el taller mecánico AR Servicios...',
      details: 'WEB Page para el Taller Mecánico AR Servicios de Río Gallegos. <a href="https://arservicios.netlify.app/" target="_blank">Ver Proyecto</a>. Realizada en Angular. 2024.',
    },
    {
      title: 'SONAR',
      image: 'assets/images/dev_sonar.png',
      description: 'Sistema WEB, red social para bandas locales...',
      details: 'Sistema en desarrollo. Red social para bandas locales. Realizando con django y PostgresSQL. 2025',
    }
  ];

  constructor(private cdr: ChangeDetectorRef) {}  

  // Abre la modal con los detalles del desarrollo seleccionado
  openModal(development: any) {
    this.selectedDevelopment = development;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isModalOpen) {
      this.closeModal();
    }
  }
}
