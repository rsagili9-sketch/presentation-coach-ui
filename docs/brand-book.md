Presentation Coach is a calm place to rehearse a 10 to 12 minute pitch: add the rubric, record a take, get a scored read of it, and compare Take 1 with Take 2. The product feels like a good teacher's margin notes, not a dashboard. Everything here serves one habit: practice, read, adjust, practice again.

## Content fundamentals

- **Voice.** Plain, warm and specific, written to "you". Say what happened and what to change: "You spoke at 171 words per minute between 03:10 and 04:40. Slow down on the problem statement." No hype, no exclamation marks, no emoji.
- **Be honest about limits.** Only the audio is analysed. Never write about body language, eye contact, gestures or slides. A criterion that cannot be judged from the recording reads **Not assessable**, never a guessed score. A missing number reads **Unavailable**. Feedback written without a rubric is marked **Provisional**.
- **Measured and AI-written stay apart.** Numbers the app computes itself (total score, percentage, words per minute, filler counts, pauses, durations, deltas) sit under the label `MEASURED`. Sentences the model writes (explanations, strengths, fixes) sit under `AI COMMENT`. Never mix them in one sentence or one tile.
- **Evidence first.** Every awarded score comes with a short explanation and a quote from the transcript with its timestamp, e.g. "at 02:14".
- **Casing.** Sentence case everywhere, including buttons: "Start recording", "Practice again". Page names are single words: Rubric, Practice, Compare, History. Times are `mm:ss`; scores are `earned / maximum`; changes carry a sign and a unit: `+9 pts`, `+12%`, `-18 wpm`.
- **Real copy to reuse.** "Your take is 8:40, under the 10 minute target." / "Not assessable from audio alone." / "Different rubrics were used, so criterion scores are not directly comparable." / "Practice again".

## Visual foundations

- **Colour.** Set pages on `surface-100` (warm off-white) with `ink` text. Coral is the only accent: `coral` fills the primary button, the current take and the timer's progress; `on-coral` is the text on it; `coral-text` is coral used as text. Use one coral fill per screen section. `coral-soft` is the background for notices and the target zone. `positive` appears only with an up arrow and a signed number. Text pairs hold 4.5:1 in both themes.
- **Never by colour alone.** Up and down are always `↑` and `↓` plus a signed number and a word ("improved", "dropped"). Status always has words.
- **Type.** Headings and numerals are the serif (`heading-1`, `heading-2`, `heading-3`, `score`, `stat`); everything else is the sans (`body`, `body-lg`, `caption`, `label`). Newsreader and Source Sans 3 load from Google Fonts; Georgia and the system sans are the fallbacks. Put big numerals in the serif and keep their units in `caption`.
- **Spacing.** Cards pad `space-4`, sit `space-6` apart, and page sections sit `space-8` apart. Pages are one column up to 720px wide, two columns only on Compare. The mobile gutter is `space-4`.
- **Surfaces.** Borders, not shadows: a card is `surface-raised` with a 1px `hairline` border and `radius-lg`. Inputs and secondary buttons use `border-strong`. There are no shadows, gradients, badges or extra dashboards.
- **Radii.** `radius-md` for controls and notices, `radius-lg` for cards, `radius-pill` for the timer track and waveform marks.
- **Focus.** A 2px solid `focus` ring with 2px offset on every interactive element.
- **Imagery and motion.** No photography or illustration. The camera preview is the only picture. The only motion is the live timer ticking and a 120ms fade on hover and focus.
- **Charts.** One chart only, grouped horizontal bars on Compare: Take 1 in `take-a`, Take 2 in `coral`, the criterion name and both values printed on the row so nothing depends on colour.

## Iconography

There is no icon set and no logo. The product name is set in `heading-2` serif. Use text glyphs only: `↑` `↓` `→` for change, `●` for the recording dot (`coral`), `×` to remove. Do not draw a logo or add emoji.

## Components

Button, Notice, SessionTimer, RubricRow, CriterionCard, Metric, DeltaRow, CompareChart and TakeRow cover every surface in the plan. They are React 18 components on `window.PresentationCoach`, styled by `components/bundle.css` and the tokens. Build screens by following the Screens section.

Not synced: nothing skipped. The repository holds only these components and the tokens; there is no logo, icon set or font file, and the fonts load from Google Fonts. The bundle is the repository's `src/index.js` with a header line; there is no build step.
