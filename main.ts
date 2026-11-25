import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two-line explanation: why a metal spoon feels colder than a wooden one.
// Line 1 (169 chars): the everyday thing + a concrete, surprising analogy.
// Line 2 (146 chars): what the analogy maps and what it leaves out.
const LINE_1 =
  "A metal spoon feels colder than a wooden one even when both are at room temperature because it carries heat away from your fingers like the faster of two checkout belts.";
const LINE_2 =
  "The groceries stand for heat entering each spoon and the belt speeds for how fast heat spreads through them, but the spoons themselves stay still.";

const ENTRY = LINE_1 + "\n" + LINE_2 + "\n";

// Self-check against the bounty gate: 1-400 characters, non-whitespace only.
const ENTRY_CHARS = [...ENTRY].length;
if (ENTRY_CHARS < 1 || ENTRY_CHARS > 400) {
  throw new Error(`entry length ${ENTRY_CHARS} is outside the 1-400 gate`);
}

// The entry must be exactly two non-empty lines: one vivid sentence
// explaining the everyday thing, one honest sentence about the analogy.
const LINES = ENTRY.trimEnd().split("\n");
if (LINES.length !== 2 || LINES.some((l) => l.trim().length === 0)) {
  throw new Error(`entry must be exactly 2 non-empty lines, got ${LINES.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
