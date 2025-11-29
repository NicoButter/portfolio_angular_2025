import { Component, HostListener } from '@angular/core';

/**
 * FooterComponent
 *
 * Responsive footer for the portfolio that includes social links, a
 * download button and an interactive "Butterfield" patch which opens
 * an informational modal.
 *
 * This component is standalone to keep it simple and reuse-friendly.
 *
 * Usage:
 * ```html
 * <app-footer></app-footer>
 * ```
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  /** Whether the modal is visible. */
  showModal = false;

  /**
   * Open the Butterfield modal.
   *
   * Sets `showModal` to true which adds the `.show` class to the modal
   * in the template and reveals it. This method is intentionally simple
   * so it can be called from template bindings or tests.
   */
  openModal(): void {
    this.showModal = true;
  }

  /**
   * Close the Butterfield modal.
   *
   * Sets `showModal` to false. Use this from click handlers, the close
   * button or programmatically from other components if needed.
   */
  closeModal(): void {
    this.showModal = false;
  }

  /**
   * Close the modal when user presses the Escape key.
   *
   * This method is decorated with `@HostListener` to listen at the
   * document level. It protects against accidental closures by
   * checking `showModal` before calling `closeModal()`.
   *
   * @param event The keyboard event fired on keydown.
   */
  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent): void {
    if (this.showModal) {
      this.closeModal();
    }
  }

  /**
   * Close the modal when clicking on the backdrop (outside modal content).
   *
   * The template marks the backdrop with `.modal` class; this handler
   * checks the event target and closes the modal only when clicking the
   * backdrop itself (not when clicking inside `.modal-content`).
   *
   * @param event Mouse event from the click.
   */
  closeModalOnBackdropClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.closeModal();
    }
  }
}
