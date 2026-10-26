CompareChart is the page's single bar chart: two bars per criterion, Take 1 in `take-a` and Take 2 in `coral`, with both values printed on each row and a signed change (`↑ +2`, `↓ −1`) computed from them. The consumer provides `criteria` as `{name, a, b, max}` and optional `labels`.

Bars start at zero and scale to each criterion's own maximum. A missing score shows **Unavailable** with no bar or arrow. Put the measured delta rows (DeltaRow) above it, and show a Notice above both when the takes used different rubrics. AI comments (improvements, next priorities) stay outside this component.
