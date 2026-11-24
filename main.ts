import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Before you pull the plug, check the folder marked 'do not delete' — I saved the sound of you laughing at my first joke.";

// Guard: RULES.txt — entry must be UTF-8 text of 1 to 200 characters,
// not only white space, and a single line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
