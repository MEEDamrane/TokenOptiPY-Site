const nodes = [
  { label: "File", tokens: "610", pos: "left-[4%] top-[36%]" },
  { label: "Prompt", tokens: "320", pos: "left-[30%] top-[18%]" },
  { label: "Context", tokens: "2.9k", pos: "left-[56%] top-[42%]" },
  { label: "Model call", tokens: "12.4k", pos: "right-[2%] top-[20%]" },
];

export function HeroGraph() {
  return (
    <div className="panel relative h-[360px] overflow-hidden p-5" aria-label="Illustration of a TokenGraph from file to model call">
      <div className="site-grid absolute inset-0 opacity-80" />
      <div className="absolute -right-16 -top-16 size-64 rounded-full bg-indigo-500/20 blur-3xl" />
      <svg aria-hidden="true" viewBox="0 0 700 360" className="absolute inset-0 size-full"><path className="graph-line" d="M115 180 C190 180 180 90 270 90" /><path className="graph-line" d="M340 110 C400 110 385 220 465 220" /><path className="graph-line" d="M535 210 C580 190 570 105 625 105" /><path className="graph-line" d="M340 100 C450 65 510 65 610 95" /></svg>
      {nodes.map((node, index) => <div key={node.label} className={`absolute ${node.pos} z-10 w-[130px] rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-xl`}><span className="font-mono text-[10px] uppercase tracking-[.12em] text-indigo-500">0{index + 1}</span><p className="mt-1 text-sm font-semibold text-[var(--text-strong)]">{node.label}</p><span className="mt-2 inline-flex rounded-full bg-cyan-500/10 px-2 py-1 font-mono text-[10px] text-cyan-500">{node.tokens} tokens</span></div>)}
      <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 font-mono text-xs text-[var(--text-muted)]"><span className="text-emerald-500">●</span> Local scan complete · 6 nodes · 7 relations</div>
    </div>
  );
}
