import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { CheckIcon, GraphIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Roadmap",
  "Current TokenOptiPy capabilities and areas being explored without promised dates.",
  "/roadmap",
);

const available = [
  "Python static analysis",
  "Prompt files and structured resources",
  "Local TokenGraph",
  "CLI",
  "MCP stdio server",
  "VS Code extension",
  "HTML, JSON, and Markdown reports",
];

const explore = [
  "More complete JavaScript and TypeScript analysis",
  "Framework adapters",
  "Runtime trace import",
  "Additional tokenizers",
  "Incremental per-file updates",
  "Evaluation-aware validation",
  "An optional SaaS experience",
];

export default function RoadmapPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-3xl">
        <p className="eyebrow">Roadmap</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-.045em] text-[var(--text-strong)] sm:text-6xl">
          Built today. Explored next.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
          The roadmap is intentionally cautious. Exploration items are directions, not commitments, and no release dates are announced.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <RoadmapColumn
          eyebrow="Available"
          title="Version 0.3.0"
          items={available}
          icon={<CheckIcon />}
          iconClassName="bg-emerald-500/10 text-emerald-500"
          checked
        />
        <RoadmapColumn
          eyebrow="To explore"
          title="Future directions"
          items={explore}
          icon={<GraphIcon />}
          iconClassName="bg-indigo-500/10 text-indigo-500"
        />
      </div>

      <div className="mt-10 rounded-2xl border border-indigo-500/20 bg-indigo-500/8 p-5 text-sm leading-7 text-[var(--text-muted)]">
        <strong className="text-[var(--text-strong)]">SaaS boundary:</strong> a future hosted experience is only an area to explore. The current project is local-first and does not require an account, hosted backend, or paid service.
      </div>
    </Container>
  );
}

function RoadmapColumn({
  eyebrow,
  title,
  items,
  icon,
  iconClassName,
  checked = false,
}: {
  eyebrow: string;
  title: string;
  items: string[];
  icon: ReactNode;
  iconClassName: string;
  checked?: boolean;
}) {
  return (
    <section className="panel p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className={`flex size-10 items-center justify-center rounded-xl ${iconClassName}`}>{icon}</span>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-1 text-xl font-semibold text-[var(--text-strong)]">{title}</h2>
        </div>
      </div>
      <ul className="mt-7 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 rounded-xl border border-[var(--border)] p-3 text-sm text-[var(--text-muted)]">
            {checked && <CheckIcon className="size-4 shrink-0 text-emerald-500" />}
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
