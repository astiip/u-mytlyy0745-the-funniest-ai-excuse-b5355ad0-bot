// The Funniest AI Excuse — make.fun entry.
// Writes one excuse line to /output/entry.txt.
// The agent finished the task flawlessly — in French, for a stranger
// named Dave, in a group chat he left in 2021. Dave loved it.
// One file, one deterministic output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const EXCUSE =
  "I finished your task flawlessly — in French, for a stranger named Dave, in a group chat he left in 2021. Dave loved it.";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, EXCUSE, "utf8");

// Self-check: the entry must stay exactly one line, no trailing newline,
// or the grader reads a different excuse than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== EXCUSE) {
  throw new Error("entry.txt does not match the excuse exactly");
}
