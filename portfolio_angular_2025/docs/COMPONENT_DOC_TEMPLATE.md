## Component documentation template

Use this template when documenting Angular components. Add one file per component in `docs/components/<component-name>.md` or add block comments directly above the component in the `.ts` file using TSDoc style.

- **File**: `src/app/<component-folder>/<component-file>.ts`
- **Component**: `<ComponentName>`

### Purpose
Concise description of the component's responsibility.

### Inputs
- `@Input() inputName: type` — description.

### Outputs / Events
- `@Output() something = new EventEmitter<T>()` — emitted when ...

### Public Methods
- `methodName(args): returnType` — description and example usage.

### Example Usage
```html
<app-example [inputName]="value" (something)="handler($event)"></app-example>
```

### Accessibility
- Notes about keyboard handling, ARIA roles, focus management.

### Notes
- Any implementation details, performance notes, or caveats.

### TSDoc example (in the TypeScript file)
```ts
/**
 * ComponentName
 *
 * Short description of the component's purpose.
 *
 * @example
 * <app-component [inputProp]="value"></app-component>
 */
@Component({ ... })
export class ComponentName {
  /**
   * Input description.
   */
  @Input() inputProp: string;
}
```
