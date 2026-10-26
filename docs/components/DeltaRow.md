DeltaRow is one measured change between two takes: label, from → to, and a signed change with an arrow. The consumer provides `from`, `to`, a `change` string already worded ("23 slower", "−1.4") and `better` (true for `↑` in `positive`, false for `↓` in `coral-text`).

Lower can be better (words per minute, filler rate), so the app decides `better`, not the sign. If either value is null the row shows **Unavailable** and no arrow. Stack rows inside one `surface-raised` card under a MEASURED label.
