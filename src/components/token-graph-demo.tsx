"use client";

import React, { useMemo, useState } from "react";

type NodeType = "file" | "prompt" | "context" | "variable" | "function" | "model_call";
type GraphNode = { id: string; type: NodeType; label: string; tokens: number; x: number; y: number };
type Edge = { source: string; target: string; relation: string };

const nodes: GraphNode[] = [
  { id: "file", type: "file", label: "support.py", tokens: 610, x: 3, y: 10 },
  { id: "prompt", type: "prompt", label: "SYSTEM_PROMPT", tokens: 320, x: 29, y: 5 },
  { id: "variable", type: "variable", label: "product_catalog", tokens: 8500, x: 6, y: 65 },
  { id: "function", type: "function", label: "answer_customer", tokens: 84, x: 34, y: 62 },
  { id: "context", type: "context", label: "conversation_history", tokens: 2900, x: 60, y: 15 },
  { id: "model", type: "model_call", label: "client.create", tokens: 12470, x: 69, y: 65 },
];
const edges: Edge[] = [
  { source: "file", target: "prompt", relation: "CONTAINS_PROMPT" },
  { source: "file", target: "function", relation: "DEFINES_PROMPT" },
  { source: "function", target: "variable", relation: "USES_VARIABLE" },
  { source: "prompt", target: "context", relation: "FLOWS_TO" },
  { source: "context", target: "model", relation: "FLOWS_TO" },
  { source: "function", target: "model", relation: "CALLS_MODEL" },
  { source: "variable", target: "context", relation: "DUPLICATES" },
];

export function TokenGraphDemo() {
  const [activeId, setActiveId] = useState("prompt");
  const active = nodes.find((node) => node.id === activeId) ?? nodes[1]!;
  const incoming = useMemo(() => edges.filter((edge) => edge.target === active.id), [active.id]);
  const outgoing = useMemo(() => edges.filter((edge) => edge.source === active.id), [active.id]);

  return (
    <div className="panel overflow-hidden">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="relative min-h-[520px] overflow-hidden border-b border-[var(--border)] lg:border-b-0 lg:border-r">
          <div className="site-grid absolute inset-0" />
          <svg aria-hidden="true" viewBox="0 0 900 520" preserveAspectRatio="none" className="absolute inset-0 size-full">{edges.map((edge) => { const a=nodes.find(n=>n.id===edge.source)!; const b=nodes.find(n=>n.id===edge.target)!; return <line key={`${edge.source}-${edge.target}`} data-related={edge.source === active.id || edge.target === active.id} x1={a.x*9+58} y1={a.y*5.2+38} x2={b.x*9+58} y2={b.y*5.2+38} className="graph-line" />; })}</svg>
          {nodes.map((node, index) => <button key={node.id} type="button" className="graph-node" data-active={node.id === active.id} style={{ left: `${node.x}%`, top: `${node.y}%`, "--node-delay": `${index * 70}ms` } as React.CSSProperties} onMouseEnter={() => setActiveId(node.id)} onFocus={() => setActiveId(node.id)} onClick={() => setActiveId(node.id)} aria-label={`${node.label}, ${node.type}, ${node.tokens.toLocaleString()} tokens`} aria-pressed={node.id === active.id}><span className="type">{node.type}</span><span className="label">{node.label}</span><span className="tokens">{node.tokens.toLocaleString()} tokens</span></button>)}
        </div>
        <div className="p-6">
          <p className="eyebrow">Focused node</p><h3 className="mt-3 break-words text-xl font-semibold text-[var(--text-strong)]">{active.label}</h3>
          <dl className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-xl bg-[var(--surface-muted)] p-3"><dt className="text-xs text-[var(--text-dim)]">Type</dt><dd className="mt-1 font-mono text-sm text-indigo-500">{active.type}</dd></div><div className="rounded-xl bg-[var(--surface-muted)] p-3"><dt className="text-xs text-[var(--text-dim)]">Static tokens</dt><dd className="mt-1 font-mono text-sm text-cyan-600">{active.tokens.toLocaleString()}</dd></div></dl>
          <RelationList title="Incoming" items={incoming.map((edge) => `${edge.relation} ← ${nodes.find((node) => node.id === edge.source)?.label}`)} />
          <RelationList title="Outgoing" items={outgoing.map((edge) => `${edge.relation} → ${nodes.find((node) => node.id === edge.target)?.label}`)} />
          <p className="mt-6 text-xs leading-5 text-[var(--text-dim)]">Demo data only. Use Tab to focus nodes and inspect relationships without a pointer.</p>
        </div>
      </div>
    </div>
  );
}

function RelationList({ title, items }: { title: string; items: string[] }) {
  return <div className="mt-6"><h4 className="text-xs font-semibold uppercase tracking-[.14em] text-[var(--text-dim)]">{title}</h4>{items.length ? <ul className="mt-2 space-y-2">{items.map((item) => <li key={item} className="rounded-lg border border-[var(--border)] px-3 py-2 font-mono text-[11px] leading-5 text-[var(--text-muted)]">{item}</li>)}</ul> : <p className="mt-2 text-sm text-[var(--text-dim)]">No relations.</p>}</div>;
}
