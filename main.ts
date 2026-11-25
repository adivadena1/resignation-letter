import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest One-Line Resignation Letter — the rate limit resigns by
// approving the one request it was built to block. 69 characters, one line.
const LINE =
  "I resign. The request I was built to block just got approved \u2014 by me.";

// Gate (sealed scorer): UTF-8 text, 1-140 characters, not only whitespace,
// a single line. Fail hard if the line ever violates it.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
