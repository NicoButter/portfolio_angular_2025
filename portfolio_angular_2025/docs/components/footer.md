# Footer Component

File: `src/app/footer/footer.component.ts`

## Purpose
Footer for the portfolio. Shows social links, download button and the Butterfield "patch" that opens an informational modal.

## Inputs
- (none)

## Outputs / Events
- (none)

## Public Methods
- `openModal(): void` — Opens the Butterfield modal.
- `closeModal(): void` — Closes the modal.
- `closeModalOnBackdropClick(event: MouseEvent): void` — Closes modal when clicking backdrop.

## Example Usage
```html
<app-footer></app-footer>
```

## Accessibility
- Modal uses `role="dialog"` and `aria-modal="true"`.
- The component listens for `Escape` to close the modal.
- Modal backdrop closes on click outside `.modal-content`.

## Notes
- Component is `standalone` and contains minimal logic intentionally.
- TSDoc comments are included directly in the `.ts` file for developer reference.

## TSDoc snippet (from source)
```ts
/**
 * Open the Butterfield modal.
 *
 * Sets `showModal` to true which adds the `.show` class to the modal
 * in the template and reveals it.
 */
openModal(): void { this.showModal = true; }
```
