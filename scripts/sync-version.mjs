import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const core = path.resolve(process.argv[2] ?? "../TokenOptiPy/pyproject.toml");
const config = path.resolve("src/config/site.ts");
const pyproject = await readFile(core, "utf8");
const match = pyproject.match(/^version\s*=\s*"([^"]+)"/m);
if (!match) throw new Error(`No project version found in ${core}`);
const current = await readFile(config, "utf8");
const updated = current.replace(/version: "[^"]+"/, `version: "${match[1]}"`);
if (updated === current) console.log(`Website already uses TokenOptiPy ${match[1]}.`);
else { await writeFile(config, updated); console.log(`Updated website version to ${match[1]}.`); }
