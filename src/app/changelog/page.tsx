import type { Metadata } from "next";
import { Container } from "@/components/container";
import { siteConfig as site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Changelog",
  "TokenOptiPy release history presented from the current repository state.",
  "/changelog",
);

const sections: Array<{ title: string; items: string[] }> = [
  {
    title: "TokenGraph",
    items: [
      "Local graph connecting files, functions, prompts, variables, contexts, and model calls.",
      "HTML, JSON, and Markdown report generation.",
      "Hotspot ranking, path queries, prompt-flow inspection, and findings.",
    ],
  },
  {
    title: "MCP",
    items: [
      "Standard local stdio server.",
      "Seven analysis and traceability tools.",
      "Configuration generation for Codex, Claude, VS Code, Cursor, Windsurf, Cline, Roo Code, Continue, and generic clients.",
    ],
  },
  {
    title: "VS Code",
    items: [
      "MCP server registration provider.",
      "Status-bar traceability with prompt bodies and arguments excluded.",
      "Graph build/open commands and prompt-flow inspection.",
    ],
  },
  {
    title: "Prompt validation",
    items: [
      "Standalone counting, analysis, optimization, comparison, and JSONL evaluation commands.",
      "Validation checks for required terms, placeholders, numbers, negations, and sensitive structure.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-3xl">
        <p className="eyebrow">Changelog</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-.045em] text-[var(--text-strong)] sm:text-6xl">
          TokenOptiPy {site.version}
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
          The current repository identifies version 0.3.0. This page summarizes confirmed capabilities rather than reconstructing undocumented release dates.
        </p>
      </div>

      <div className="mt-12 space-y-5">
        {sections.map((section) => (
          <section key={section.title} className="panel p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-[var(--text-strong)]">{section.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-muted)]">
              {section.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/8 p-5 text-sm leading-7 text-[var(--text-muted)]">
        <strong className="text-[var(--text-strong)]">TODO:</strong> replace this summary with tag-by-tag release notes when the repository publishes a formal changelog or release history.
      </div>
    </Container>
  );
}
