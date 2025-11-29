import { Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Ensure CommonModule is imported
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { DevelopmentsComponent } from './developments/developments.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

/**
 * AppComponent
 *
 * Root component of the portfolio application. It composes the main
 * sections (header, about-me, skills, developments, footer) and owns a
 * reference to the `ContactFormComponent` to toggle the contact form
 * when the header emits the `contactToggle` event.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    ContactFormComponent,
    AboutMeComponent,
    SkillsComponent,
    DevelopmentsComponent,
    FooterComponent,
    ContactFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /** Application title (used by Angular CLI scaffolding). */
  title = 'portfolio_angular_2025';

  /** Reference to the embedded contact form component. */
  @ViewChild(ContactFormComponent) contactForm!: ContactFormComponent;

  /**
   * Toggle the contact form by delegating to the `ContactFormComponent`.
   * Called from header `contactToggle` output.
   */
  toggleForm(): void {
    this.contactForm.toggleContactForm();
  }
}
