# Project documentation (starter)

This folder contains starter documentation and guidelines to professionalize the project.

Goals:
- Provide an easy, repeatable way to generate API docs for the Angular app.
- Give a consistent template to document components and modules.
- Add scripts to help format and lint code according to common standards.

Standards and recommendations
- TypeScript / Angular: use TSDoc/JSDoc style comments for component classes, inputs, outputs and public methods. Follow the Angular Style Guide where applicable.
- CSS: follow a consistent style (BEM-like naming is recommended). Consider `stylelint` for enforcement.
- HTML: maintain semantic structure and include accessibility attributes (ARIA) when needed.
- General: use `prettier` for formatting and `eslint` for linting TypeScript.

Recommended tooling (not yet installed automatically):
- Compodoc: generate component/module documentation for Angular projects.
  - CLI: `npx @compodoc/compodoc -p tsconfig.json -d docs/api`
- TypeDoc: generate API docs from TypeScript comments.
  - CLI: `npx typedoc --entryPoints src --out docs/ts`
- ESLint + Prettier: enforce code style and auto-format.

Getting started
1. Install dev dependencies (recommended):

```bash
npm install --save-dev @compodoc/compodoc typedoc eslint prettier
```

2. Generate Compodoc docs:

```bash
npm run docs:compodoc
```

3. Generate TypeDoc (optional):

```bash
npm run docs:typedoc
```

4. Use the template in `COMPONENT_DOC_TEMPLATE.md` to document each component.

Next steps
- I will add a component documentation template and example docs for one component (footer) so you can see the pattern.
