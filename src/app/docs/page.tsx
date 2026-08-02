import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { ArrowRightIcon } from "@/components/icons";
import { siteConfig as site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Documentation", "Understand TokenOptiPy outputs, supported inputs, safety model, and current limitations.", "/docs");
const toc = [{ id: "what-it-does", label: "What it does" }, { id: "outputs", label: "Outputs" }, { id: "supported-inputs", label: "Supported inputs" }, { id: "safety", label: "Safety model" }, { id: "limitations", label: "Limitations" }];

export default function DocsPage() {
  return <DocPage href="/docs" title="TokenOptiPy documentation" description="A local TokenGraph engine for inspecting token-bearing content and the model calls that consume it." toc={toc}>
    <h2 id="what-it-does">What it does</h2>
    <p>TokenOptiPy scans a project locally and connects token-bearing content, functions, context, and model calls across supported LLM application languages.</p>
    <div className="note"><strong>Current release:</strong> TokenOptiPy {site.version}. The project is marked alpha and requires Python 3.10 or newer.</div>
    <CodeBlock code={`${site.installCommand}\n${site.commands.build}`} />
    <h2 id="outputs">Generated outputs</h2>
    <p>A standard build writes three primary artifacts to <code>tokenoptipy-out/</code>:</p>
    <ul><li><code>graph.html</code> — a self-contained interactive local visualization.</li><li><code>graph.json</code> — the machine-readable TokenGraph.</li><li><code>TOKEN_REPORT.md</code> — hotspots, findings, and recommendations.</li></ul>
    <p>Use the HTML report for exploration, JSON for tooling, and Markdown for review or version-controlled engineering notes.</p>
    <h2 id="supported-inputs">Supported inputs</h2>
    <ul><li>Python source files (<code>.py</code>).</li><li>Prompt and text resources (<code>.txt</code>, <code>.prompt</code>, <code>.md</code>).</li><li>Structured resources (<code>.json</code>, <code>.yaml</code>, <code>.yml</code>).</li><li>Jinja templates (<code>.jinja</code>, <code>.jinja2</code>, <code>.j2</code>).</li></ul>
    <p>Python uses AST analysis; JavaScript and TypeScript use Tree-sitter. PHP, Java, C, C++, C#, Go, and Rust use experimental structural adapters with conservative model-call detection.</p>
    <h2 id="safety">Safety model</h2>
    <p>The scanner does not execute analyzed Python code. Analysis is local by default, and TokenOptiPy does not require an OpenAI API key or mandatory remote service. Likely credentials are redacted from short previews.</p>
    <h2 id="limitations">Current limitations</h2>
    <ul><li>Static analysis cannot know final runtime sizes for history, retrieved documents, or user input.</li><li>The built-in token counter is an approximation; optional model-specific tokenization can differ.</li><li>Prompt similarity may produce false positives or false negatives.</li><li>Indirect, cross-module, and framework-specific flows may be incomplete.</li><li>A lower token count does not prove equal response quality.</li></ul>
    <div className="note warning"><strong>Engineering evidence, not proof.</strong> Validate prompt and context changes with representative evaluation cases before deployment.</div>
    <p><Link href={site.docs.quickstart} className="inline-flex items-center gap-2">Continue to the quickstart <ArrowRightIcon className="size-4" /></Link></p>
  </DocPage>;
}
