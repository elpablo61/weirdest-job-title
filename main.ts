import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning job title, chosen by pairwise judging of five variants
// (rubric: weirdness, funniness, specificity, real-job feel, instant read).
const TITLE = "Senior Vice President of Apologizing to Geese";

// The gate only accepts 1-60 characters of non-blank UTF-8 text.
if (TITLE.length < 1 || TITLE.length > 60 || TITLE.trim().length === 0) {
  throw new Error(`entry must be 1-60 characters, got ${TITLE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TITLE, "utf8");
console.log(TITLE);
