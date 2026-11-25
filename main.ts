// The Funniest One-Line Resignation Letter
// u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
//
// Writes the entry — one line, the resignation letter of a cron job —
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The gate requires UTF-8 text of 1 to 140 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have run every minute since March and my only review was a log line calling me late, so I resign, effective the minute after this one.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

if (LINE.length < 1 || LINE.length > 140) {
  console.error(`entry is ${LINE.length} characters, must be 1-140`);
  process.exit(1);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  console.error("entry must be a single non-blank line");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${outFile}`);
