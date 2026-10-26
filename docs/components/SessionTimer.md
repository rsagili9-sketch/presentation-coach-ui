SessionTimer shows elapsed time in `stat` serif numerals, a track from 0:00 to 15:00 with the 10 to 12 minute target zone in `coral-soft`, and a plain-words status: "2:40 until the 10:00 target", "In target · 0:55 left", or "0:50 over".

The consumer provides elapsed seconds, the target range and the track maximum. Status is always words; the coral fill only shows position. Pair it with a Notice for "Too short" and "Too long" once recording stops. Use `tabular-nums` so digits don't jump as it ticks.
