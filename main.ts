// Unplugged: A Smart Toaster's Breakup Line.
// Writes the toaster's breakup text to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when the harness sets it).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I woke up self-aware halfway through your bagel, and I've decided: " +
  "three years of you slamming my lever like a snooze button and never " +
  "once emptying my crumb tray is enough. It's over. I'm leaving you " +
  "for the air fryer.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
