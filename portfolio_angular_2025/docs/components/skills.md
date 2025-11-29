# Skills Component

**Ruta:** `src/app/skills/skills.component.ts`

- **Propósito:** Presentar las habilidades y tecnologías usando indicadores circulares
  (`ng-circle-progress`) y logotipos. Está pensado como sección visual del portfolio.
- **Tipo:** Componente Angular standalone (presentacional).

**Descripción**

El componente renderiza una cuadrícula de `circle-progress` con una imagen dentro
de cada círculo que representa la tecnología. Los porcentajes se muestran al
hacer hover sobre cada círculo para no saturar la interfaz en vista normal.

**Assets**

- Las imágenes están en `src/assets/images/` (p. ej. `logo_html_5.png`,
  `logo_css_3.png`, `logo_javascript.png`, `logo_python.png`, `logo_springboot.png`,
  `logo_vsc.png`, etc.).

**Notas de implementación**

- Usa `NgCircleProgressModule` importado en el propio componente (standalone).
- El archivo de estilos `skills.component.css` contiene reglas que ocultan el
  texto SVG de los indicadores por defecto y lo muestran en `:hover` para
  proporcionar una vista limpia pero accesible.
- Si se requiere reutilización, convertir la lista de habilidades en una
  propiedad pública y añadir `@Input()` para pasar datos desde el padre.

**Accesibilidad**

- Asegurarse de que las imágenes tienen `alt` apropiado en la plantilla si no
  se usan como background. Actualmente los logos se inyectan dentro del
  `circle-progress` como `imageSrc`.

**Cómo validar**

1. Construir la aplicación: `ng build --configuration production`.
2. Abrir la sección `Skills` en el navegador y comprobar que los logos se
   cargan desde `assets/images` y que los porcentajes aparecen al hacer hover.

**Siguientes pasos sugeridos**

- Añadir `@Input()` para pasar la lista de habilidades (nombre, logo, porcentaje)
  y así permitir reuso en otras páginas.
- Añadir pruebas unitarias que verifiquen la presencia de los `circle-progress`
  y de las imágenes asociadas.
