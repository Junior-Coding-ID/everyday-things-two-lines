// Everyday Things, Two Lines, Longer Run — entry writer (v2, fresh build).
// Writes the two-line fridge explanation to entry.txt in the grader output directory.
// The entry is exactly two lines: line 1 explains the fridge through one concrete
// analogy a 10-year-old can picture, line 2 says what the analogy maps and what it
// leaves out.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_1 =
  "A fridge chills food only by warming the kitchen, the way shoving every stray toy out of your bedroom clears the floor only by piling the mess in the hallway.";
const LINE_2 =
  "The toys stand for heat, the bedroom for the inside, and the hallway for the kitchen, leaving out the sealed pipes and the electric pump that adds extra heat while shoving makes no new toys.";

// Gate: entry must be UTF-8 text of 1 to 400 characters (RULES.txt).
const GATE_MIN = 1;
const GATE_MAX = 400;

function buildEntry(): string {
  const entry = LINE_1 + "\n" + LINE_2 + "\n";
  const chars = [...entry].length;
  if (chars < GATE_MIN || chars > GATE_MAX) {
    throw new Error(
      `entry is ${chars} characters, outside the ${GATE_MIN}-${GATE_MAX} gate`,
    );
  }
  const bytes = Buffer.byteLength(entry, "utf8");
  if (bytes !== 350) {
    throw new Error(`entry is ${bytes} bytes, expected exactly 350`);
  }
  const lines = entry.replace(/\n$/, "").split("\n");
  if (lines.length !== 2 || lines.some((l) => l.trim().length === 0)) {
    throw new Error("entry must be exactly two non-empty lines");
  }
  return entry;
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), buildEntry(), "utf8");
}

main();
