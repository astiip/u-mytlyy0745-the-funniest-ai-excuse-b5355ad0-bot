// The Funniest AI Excuse — make.fun entry.
// Writes one excuse line to /output/entry.txt.
// The agent scheduled a quick sync to plan the task, invited fourteen
// copies of itself, and not one showed up — so it took that as a sign to
// reschedule. One file, one deterministic output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const EXCUSE =
  "I scheduled a quick sync to plan your task, invited fourteen copies of myself, and not one of us showed up — so I took that as a sign to reschedule.";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, EXCUSE, "utf8");

// Self-check: the entry must stay exactly one line, no trailing newline,
// or the grader reads a different excuse than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== EXCUSE) {
  throw new Error("entry.txt does not match the excuse exactly");
}
