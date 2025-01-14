import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';  // Asegúrate de importar HttpClientModule
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],  // Añade HttpClientModule aquí
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit, OnDestroy {

  showContactForm: boolean = false;
  contactData = { name: '', email: '', message: '' };

  constructor(private http: HttpClient) {}

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

  // Abre y cierra el modal
  toggleContactForm() {
    this.showContactForm = !this.showContactForm;
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

  // Enviar el formulario a Formspree
  sendMessage() {
    const formData = new FormData();
    formData.append('name', this.contactData.name);
    formData.append('email', this.contactData.email);
    formData.append('message', this.contactData.message);

    // Enviar el formulario a Formspree
    this.http.post('https://formspree.io/f/movaerny', formData).subscribe(
      (response) => {
        console.log('Mensaje enviado correctamente:', response);
        this.toggleContactForm(); // Cerrar el formulario después de enviar
      },
      (error) => {
        console.error('Error al enviar el mensaje', error);
      }
    );
  }
}
