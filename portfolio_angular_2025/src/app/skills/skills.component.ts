import { Component } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

/**
 * SkillsComponent
 *
 * Sección visual que muestra las habilidades/técnologías del autor mediante
 * círculos de progreso (`ng-circle-progress`) y logotipos. El componente es
 * standalone y declara la dependencia `NgCircleProgressModule` para renderizar
 * los indicadores.
 *
 * Detalles relevantes:
 * - Las imágenes de los logos se sirven desde `src/assets/images` y se
 *   referencian desde la plantilla `skills.component.html`.
 * - La visibilidad de los porcentajes se maneja por CSS: están ocultos por
 *   defecto y se muestran en hover para mejorar la legibilidad sin saturar
 *   la UI.
 * - Este componente es presentacional; no expone `@Input()` ni `@Output()`
 *   públicos en el archivo TypeScript. Si se desea convertirlo en un
 *   componente más reutilizable, mover la configuración de las habilidades a
 *   una propiedad pública con `@Input()`.
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgCircleProgressModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {}
