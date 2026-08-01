import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ShieldIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Privacy and security",
  "How TokenOptiPy keeps analysis local and limits sensitive trace data.",
  "/privacy",
);

const points: Array<[title: string, description: string]> = [
  ["Local analysis", "TokenOptiPy scans supported files and builds reports on the local machine by default."],
  ["No mandatory upload", "The project does not require source code or prompts to be sent to a hosted TokenOptiPy service."],
  ["No mandatory API key", "The default analysis path does not require an OpenAI key or another remote model API."],
  ["Safe MCP traces", "Trace records exclude complete prompt bodies and tool arguments, and expose safe execution metadata instead."],
  ["Redacted previews", "Likely credentials are removed from short stored previews where supported."],
  ["Local report files", "graph.html is self-contained and opens locally alongside graph.json and TOKEN_REPORT.md."],
];

export default function PrivacyPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-3xl">
        <p className="eyebrow">Privacy & security</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-.045em] text-[var(--text-strong)] sm:text-6xl">
          Local by default. Private by design.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
          TokenOptiPy is designed for local static analysis and inspectable local reports. This page summarizes the current repository behavior, not a contractual security guarantee.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {points.map(([title, description]) => (
          <div key={title} className="feature-card">
            <ShieldIcon className="size-6 text-indigo-500" />
            <h2 className="mt-5 text-lg font-semibold text-[var(--text-strong)]">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 panel p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[var(--text-strong)]">Review before sharing</h2>
        <p className="mt-4 max-w-4xl leading-8 text-[var(--text-muted)]">
          Generated reports can contain file paths or names, hashes, signatures, node metadata, findings, and redacted previews. Redaction reduces risk but does not replace a manual review. Treat reports as project artifacts and inspect them before attaching them to public issues, documentation, or chat conversations.
        </p>
      </div>

      <div className="mt-12 max-w-3xl text-[var(--text-muted)]">
        <h2 className="text-2xl font-semibold text-[var(--text-strong)]">Operational boundaries</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-7">
          <li>Static analysis cannot identify every secret or sensitive value.</li>
          <li>Client configuration files may include local absolute paths.</li>
          <li>Third-party MCP clients and editors have their own privacy behavior.</li>
          <li>Review the repository <code>SECURITY.md</code> before reporting a vulnerability.</li>
        </ul>
      </div>
    </Container>
  );
}
