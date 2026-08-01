"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SearchIcon } from "@/components/icons";
import type { DocLink } from "@/lib/docs";

export function DocsSearch({ items }: { items: DocLink[] }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return items.filter((item) => `${item.title} ${item.description}`.toLowerCase().includes(normalized));
  }, [items, query]);

  return (
    <div className="relative">
      <label className="sr-only" htmlFor="docs-search">Search documentation</label>
      <SearchIcon className="pointer-events-none absolute left-3 top-3 size-4 text-[var(--text-dim)]" />
      <input id="docs-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search docs" className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] py-2.5 pl-9 pr-3 text-sm outline-none placeholder:text-[var(--text-dim)] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" />
      {query && <div className="absolute inset-x-0 top-[calc(100%+8px)] z-20 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-xl">{results.length ? results.map((item) => <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 hover:bg-[var(--surface-muted)]"><span className="block text-sm font-medium text-[var(--text-strong)]">{item.title}</span><span className="block text-xs text-[var(--text-dim)]">{item.description}</span></Link>) : <p className="px-3 py-2 text-sm text-[var(--text-muted)]">No matching page.</p>}</div>}
    </div>
  );
}
