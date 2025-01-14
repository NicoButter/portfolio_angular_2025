import { Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Asegúrate de importar esto
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { DevelopmentsComponent } from './developments/developments.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

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
  title = 'portfolio_angular_2025';

  @ViewChild(ContactFormComponent) contactForm!: ContactFormComponent;
  toggleForm() {
    this.contactForm.toggleContactForm();
  }
}
