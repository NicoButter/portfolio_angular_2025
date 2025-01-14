import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit, OnDestroy {

  showContactForm: boolean = false;

  // Abre y cierra el modal
  toggleContactForm() {
    this.showContactForm = !this.showContactForm;
  }

  ngOnInit() {
    // Detectar el clic fuera del modal
    window.addEventListener('click', this.handleOutsideClick);
    
    // Detectar la tecla Escape
    window.addEventListener('keydown', this.handleEscapeKey);
  }

  ngOnDestroy() {
    // Limpiar los listeners cuando el componente se destruye
    window.removeEventListener('click', this.handleOutsideClick);
    window.removeEventListener('keydown', this.handleEscapeKey);
  }

  // Cerrar modal si se hace clic fuera del contenido
  handleOutsideClick = (event: MouseEvent) => {
    const modalContent = document.querySelector('.modal-content');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    // Verifica si el clic fue fuera del modal
    if (modalOverlay && !modalContent?.contains(event.target as Node)) {
      this.showContactForm = false;
    }
  }

  // Cerrar modal al presionar la tecla Escape
  handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.showContactForm = false;
    }
  }
}
