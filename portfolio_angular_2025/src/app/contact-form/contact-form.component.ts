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
  sending: boolean = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  private ignoreOutsideClick = false;

  private focusableElementsSelector = 'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Detectar clic y teclado a nivel de documento para manejar cierre y focus
    document.addEventListener('click', this.handleOutsideClick);
    document.addEventListener('keydown', this.handleEscapeKey);
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener('keydown', this.handleEscapeKey);
  }

  // Abre y cierra el modal. Cuando se abre, fijar foco al primer control.
  toggleContactForm() {
    this.showContactForm = !this.showContactForm;
    if (this.showContactForm) {
      // reset messages
      this.successMessage = null;
      this.errorMessage = null;
      // evitar que el click que abrió el modal lo cierre inmediatamente
      this.ignoreOutsideClick = true;
      setTimeout(() => this.ignoreOutsideClick = false, 120);
      // permitir que el DOM pinte y luego enfocar
      setTimeout(() => this.focusFirstControl(), 50);
    }
  }

  private focusFirstControl() {
    const modal = document.querySelector('.modal-content') as HTMLElement | null;
    if (!modal) return;
    const first = modal.querySelector('input, textarea, button') as HTMLElement | null;
    first?.focus();
  }

  // Cerrar modal si se hace clic fuera del contenido
  handleOutsideClick = (event: MouseEvent) => {
    if (!this.showContactForm) return;
    if (this.ignoreOutsideClick) return;
    const modalContent = document.querySelector('.modal-content');
    const target = event.target as Node;
    if (modalContent && !modalContent.contains(target)) {
      this.closeForm();
    }
  }

  // Cerrar modal al presionar la tecla Escape y manejar tab trapping
  handleEscapeKey = (event: KeyboardEvent) => {
    if (!this.showContactForm) return;
    if (event.key === 'Escape') {
      this.closeForm();
    }

    // Simple focus trap: keep focus inside modal on Tab key
    if (event.key === 'Tab') {
      const modal = document.querySelector('.modal-content') as HTMLElement | null;
      if (!modal) return;
      const focusable = Array.from(modal.querySelectorAll(this.focusableElementsSelector)) as HTMLElement[];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    }
  }

  private closeForm() {
    this.showContactForm = false;
    this.sending = false;
  }

  // Enviar el formulario a Formspree con feedback y manejo de estado
  sendMessage(form?: any) {
    if (this.sending) return;
    if (form && form.invalid) {
      // marcar todos los campos como tocados para mostrar errores
      Object.values(form.controls).forEach((c: any) => c.markAsTouched());
      return;
    }

    this.sending = true;
    this.successMessage = null;
    this.errorMessage = null;

    const payload = {
      name: this.contactData.name,
      email: this.contactData.email,
      message: this.contactData.message,
    };

    // Enviar como JSON a Formspree endpoint
    this.http.post('https://formspree.io/f/movaerny', payload).subscribe(
      (response: any) => {
        this.sending = false;
        this.successMessage = 'Message sent — thank you!';
        // limpiar formulario
        this.contactData = { name: '', email: '', message: '' };
        // cerrar modal después de una pausa para que el usuario lea el mensaje
        setTimeout(() => this.closeForm(), 1700);
      },
      (error) => {
        console.error('Error sending contact form', error);
        this.sending = false;
        this.errorMessage = 'There was an error sending your message. Please try again later.';
      }
    );
  }
}
