"use strict";

const fs = require("node:fs");
const path = require("node:path");

const LINE_1 =
  "A bike helmet protects your head by letting itself crush to stretch out the stop, the way pulling your hands back as you catch a water balloon keeps it from popping.";
const LINE_2 =
  "Your moving hands stand for the inner foam and the balloon for your brain inside your skull, leaving out the hard outer shell that spreads sharp hits and how crushed foam stays flat after one crash while hands can catch again.";

const ENTRY = LINE_1 + "\n" + LINE_2 + "\n";

function validate(entry) {
  const lines = entry.split("\n");
  if (lines.length !== 3 || lines[2] !== "") {
    throw new Error("entry must be exactly two lines");
  }
  if (lines[0].length === 0 || lines[1].length === 0) {
    throw new Error("each line must be non-empty");
  }
  if (entry.length < 1 || entry.length > 400) {
    throw new Error("entry must be 1-400 characters, got " + entry.length);
  }
}

validate(ENTRY);

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_OUTPUT ||
  "/output";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
