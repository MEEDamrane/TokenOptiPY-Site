import { CopyButton } from "@/components/copy-button";

export function CodeBlock({ code, label = "Terminal" }: { code: string; label?: string }) {
  return (
    <div className="code-block not-prose">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">{label}</span>
        <CopyButton text={code} />
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-7"><code>{code}</code></pre>
    </div>
  );
}
