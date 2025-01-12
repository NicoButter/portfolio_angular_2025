import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.querySelector('.header') as HTMLElement;
    
    // Si el scroll es mayor a 100px, añadimos la clase shrink
    if (window.scrollY > 100) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  }
}
