import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("TokenGraph", "Understand TokenOptiPy nodes, edges, findings, tokens, and prompt flows.", "/docs/token-graph");
const toc = [{ id: "model", label: "Graph model" }, { id: "nodes", label: "Node types" }, { id: "edges", label: "Relations" }, { id: "findings", label: "Findings" }, { id: "tokens", label: "Token estimates" }, { id: "queries", label: "Flow queries" }];

export default function TokenGraphPage() { return <DocPage href="/docs/token-graph" title="The TokenGraph model" description="A local, inspectable representation of token-bearing content and the model calls that may consume it." toc={toc}>
  <h2 id="model">Graph model</h2><p>The TokenGraph combines source structure, prompt content, token estimates, and detected flows. It is designed to make static evidence queryable rather than hiding analysis in a single summary score.</p>
  <CodeBlock label="Conceptual flow" code="File → Prompt → Context → Function → Model call" />
  <h2 id="nodes">Node types</h2><ul><li><code>file</code> — a supported source or resource file.</li><li><code>function</code> — a Python function discovered by static analysis.</li><li><code>prompt</code> — prompt-bearing static content.</li><li><code>variable</code> — a variable participating in prompt or context assembly.</li><li><code>context</code> — content passed through a model-call flow.</li><li><code>model_call</code> — a recognized call site that may invoke a language model.</li></ul>
  <h2 id="edges">Common relations</h2><ul><li><code>DEFINES</code></li><li><code>DEFINES_PROMPT</code></li><li><code>CONTAINS_PROMPT</code></li><li><code>USES_VARIABLE</code></li><li><code>FLOWS_TO</code></li><li><code>CALLS_MODEL</code></li><li><code>DUPLICATES</code></li></ul><p>Edges make it possible to inspect incoming and outgoing relations, follow a shortest path, or retrieve a prompt&apos;s connected model-call paths.</p>
  <h2 id="findings">Findings</h2><ul><li><code>TG001</code> — large static prompt.</li><li><code>TG002</code> — repeated or strongly overlapping prompts.</li><li><code>TG003</code> — many few-shot examples.</li><li><code>TG005</code> — potentially unbounded conversation context.</li><li><code>TG006</code> — prompt with many dynamic values.</li><li><code>SEC001</code> — possible secret in prompt content.</li></ul>
  <h2 id="tokens">Token estimates</h2><p>The dependency-free default counter is a local approximation. An optional model-specific tokenizer can produce different counts. Runtime inputs, retrieval results, and conversation history are not fully known to static analysis.</p><div className="note warning"><strong>Do not treat estimates as billing records.</strong> Use the graph to prioritize investigation, then measure representative runtime behavior where available.</div>
  <h2 id="queries">Flow queries</h2><CodeBlock code={`tokenoptipy explain CLASSIFY_PROMPT\ntokenoptipy path CLASSIFY_PROMPT conversation_history\ntokenoptipy query "where is history injected"\ntokenoptipy prompt-flow CLASSIFY_PROMPT`} /><p>For machine integrations, the MCP server provides <code>query_token_flow</code> and <code>get_prompt_flow</code>.</p>
</DocPage>; }
