# Presentation Coach UI

Design tokens and React components for Presentation Coach, an app for rehearsing a 10 to 12 minute pitch.

- `tokens.css`: colours (light and dark), type styles, spacing and radii. The source of truth.
- `components.css`: styles for the components, built on the tokens.
- `src/index.js`: the components as one classic script. Load React 18, then this file; it assigns `window.PresentationCoach`. No build step.
- `src/index.d.ts`: prop types.

Components: Button, Notice, SessionTimer, RubricRow, CriterionCard, Metric, DeltaRow, CompareChart, TakeRow.

Look: warm off-white page, deep ink text, one coral accent, serif headings (Newsreader) over Source Sans 3. Borders, not shadows.

Run `npm install && npm test` for a server-render smoke test.
