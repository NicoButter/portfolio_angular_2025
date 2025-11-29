import { Component, HostListener, Output, EventEmitter } from '@angular/core';

/**
 * HeaderComponent
 *
 * Header with responsive behaviour. Shrinks on scroll and exposes a
 * `contactToggle` event to open the contact form from parent components.
 *
 * Usage:
 * ```html
 * <app-header (contactToggle)="toggleForm()"></app-header>
 * ```
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  /**
   * Listen to window scroll events to toggle the `.shrink` class on the
   * header element when the page is scrolled more than 100px.
   */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const header = document.querySelector('.header') as HTMLElement;

    // If scroll is greater than 100px, add class 'shrink'
    if (window.scrollY > 100) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  }

  /** Emitted when the 'Contáctame' button is clicked in the header. */
  @Output() contactToggle = new EventEmitter<void>();

  /**
   * Handler for the contact button click in the header template.
   * Emits `contactToggle` so a parent component (e.g., `AppComponent`) can
   * open the contact form modal.
   */
  onContactClick(): void {
    console.log('Botón "Contáctame" clickeado');
    this.contactToggle.emit();
  }

}
