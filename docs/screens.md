# Screens

How the six routes use the system. Each screen is one column on `surface-100`, 720px at most, with a `heading-1` title and at most one coral button.

## Landing and sign-in `/`

`display` headline and one `body-lg` sentence: what the coach does and that only audio is analysed. Email and password fields (`RubricRow` input style) and one primary Button "Sign in". A text Button "Create an account" below.

## Rubric `/rubric`

Two inputs side by side: "Upload PDF" (secondary Button) and a paste box. After extraction, show one `RubricRow` per criterion, editable, with a running total of maximum points. Primary Button "Save rubric". With no rubric saved, show a Notice "Provisional" on Practice and Results.

## Practice `/practice`

A `radius-lg` recorder frame with the camera preview, the `SessionTimer` under it, and "Start recording" / "Upload a video" Buttons. Warnings come from Notice ("Too short", "Too long"). After the take, a Q&A strip: "Mark Q&A start", "Mark Q&A end", or a text Button "No Q&A". Then primary "Evaluate this take".

## Results `/takes/$id`

Top: `score` numeral with `earned / maximum` and the percentage, labelled MEASURED. Then Metric tiles for words per minute, filler rate, duration and long pauses. Then one `CriterionCard` per rubric criterion. Then "Top 3 strengths" and "Top 3 fixes" as AI COMMENT lists, and timestamped feedback. End with primary Button "Practice again". Say nothing about body language or slides.

## Compare `/compare`

Two selects choose the takes. A Notice appears if the rubrics differ. Show the score, change in points, change in percent, duration, words per minute and filler rate as `CompareChart` delta rows (MEASURED), then the single bar chart, then "3 improvements" and "Up to 3 next priorities" (AI COMMENT). A metric either take lacks reads Unavailable.

## History `/history`

A list of `TakeRow`, newest first, each with date, rubric name, duration and score. Selecting two rows enables a secondary Button "Compare these two".

## Mobile

Gutter `space-4`, one column, tiles stack, the compare chart keeps its rows and drops nothing. No horizontal page scroll.
