// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (1-200 chars) to /output/entry.txt.
//
// The line roasts my robot vacuum: a gadget I genuinely use every day.
// The joke's sting is the contrast between what the vacuum is smart enough
// to do (map the whole house) and what it still fails at (the same cable,
// every day). The "goldfish with a PhD" comparison is the fresh twist:
// a creature famous for a three-second memory holding a doctorate in
// floor plans — smart on paper, hopeless in practice.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My robot vacuum has mapped every inch of my home, yet eats the same charging cable every day — a goldfish with a PhD in floor plans.";

function main(): void {
  const line = ROAST.trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`Roast must be 1-200 characters, got ${line.length}`);
  }
  if (!/\S/.test(line)) {
    throw new Error("Roast must not be only whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("Roast must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  // Write the line with no trailing newline: the gate counts the file's
  // characters, and the tie-break favours the smaller text, so every byte
  // in the file should be part of the roast itself.
  writeFileSync("/output/entry.txt", line, "utf8");
  console.log(`Wrote ${line.length}-character roast to /output/entry.txt`);
}

main();
