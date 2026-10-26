# What is left to build

The demo in `index.html` is a prototype: scoring, transcripts and feedback are simulated in the browser. A real app needs:

1. **Backend.** Sign-in with email and password, a database and a private storage bucket (the plan uses Lovable Cloud). GitHub Pages serves static files only, so this cannot run there.
2. **Tables with row-level security** so each user sees only their own rows: `rubrics` (criteria jsonb: name, description, max_points), `takes` (user, rubric_id, video_path, duration, qa_start/end, status), `evaluations` (take_id, transcript jsonb with segments, metrics jsonb, rubric_scores jsonb, feedback jsonb).
3. **Recording.** MediaRecorder (webm) for camera and mic, an audio-only track extracted in the browser before upload, and uploads through signed URLs.
4. **Server functions.** `extractRubric` (PDF text or pasted text to structured criteria) and `evaluateTake` (speech-to-text with timestamps, local WPM, filler and pause computation, one LLM call for rubric scoring and feedback with a strict JSON schema, then save). The total is summed in code, not by the AI.
5. **Metrics module.** Pure functions for WPM, fillers, pauses, totals and deltas in `src/lib/metrics.ts`, with vitest tests.
6. **Routes.** `/` (landing and sign-in), `/rubric`, `/practice`, `/takes/:id`, `/compare`, `/history`. The landing and sign-in screen is not built yet.
7. **Research.** Look at SlideSway, Yoodli and PitchCoach AI and decide what to borrow. Not done yet.

Build order: backend setup, rubric, recording and upload, evaluation, results, compare.

Out of scope for v1: payments, teams, sharing, slide analysis, video and body-language analysis.
