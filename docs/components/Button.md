Use Button for every action. The consumer provides the label (sentence case, a verb) and the click handler.

- **Primary** (`coral` fill, `on-coral` text): the one main action in a section, such as "Start recording", "Save rubric", "Evaluate this take". Use one per section.
- **Secondary** (`border-strong` outline): alternatives like "Upload a video" or "Compare these two".
- **Text** (`coral-text`, underlined): quiet actions like "Practice again" inside a result or "No Q&A".
- **Disabled** while a take is uploading or evaluating; say why in `caption` text beside it.

Do: keep labels under four words. Don't: put two primary buttons in one section, add icons, or use red for destructive actions.
