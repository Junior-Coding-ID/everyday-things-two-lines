// Everyday Things, Two Lines — v3
// Writes the two-line toaster explanation to <MAKEFUN_OUTPUT>/entry.txt
// (defaults to /output/entry.txt). Node APIs only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Line 1 (172 chars): one vivid sentence, one metaphor only —
// a toaster as a tiny sun in a box.
const LINE_1 =
  "A toaster is a tiny sun that lives in a box on your kitchen counter, browning your bread the way the real sun browns your skin, only in two minutes and without the sunburn.";

// Line 2 (199 chars): honest + specific about what the analogy
// maps (glowing wires, heat changing bread) and what it leaves out
// (a real sun is far away and free; a toaster needs electricity,
// a plug, and a timer to stop).
const LINE_2 =
  "The sun stands for the glowing wires inside, the browning for heat changing the bread, leaving out that a real sun is far away and free while a toaster needs electricity, a plug, and a timer to stop.";

// The entry text: exactly two lines plus a trailing newline
// (172 + 1 + 199 + 1 = 373 characters, inside the 1–400 gate).
const ENTRY = `${LINE_1}\n${LINE_2}\n`;

function main(): void {
  // Self-check the sealed scorer's gate: 1–400 characters, not
  // only whitespace. Fail loudly instead of writing an invalid entry.
  if (ENTRY.length < 1 || ENTRY.length > 400 || ENTRY.trim().length === 0) {
    throw new Error(`entry length ${ENTRY.length} is outside the 1-400 gate`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
