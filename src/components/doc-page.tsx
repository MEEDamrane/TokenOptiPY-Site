import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { DocsSearch } from "@/components/docs-search";
import { adjacentDocs, docsLinks } from "@/lib/docs";

export type TocItem = { id: string; label: string };

export function DocPage({ href, title, description, toc, children }: { href: string; title: string; description: string; toc: TocItem[]; children: ReactNode }) {
  const { previous, next } = adjacentDocs(href);
  return (
    <div className="mx-auto grid w-full max-w-[1500px] gap-8 px-5 py-10 sm:px-7 lg:grid-cols-[240px_minmax(0,800px)_210px] lg:px-8">
      <aside className="hidden lg:block"><div className="sticky top-24"><DocsSearch items={docsLinks} /><nav aria-label="Documentation" className="mt-5 space-y-1">{docsLinks.map((item) => <Link key={item.href} href={item.href} aria-current={item.href === href ? "page" : undefined} className={`block rounded-xl px-3 py-2.5 text-sm ${item.href === href ? "bg-indigo-500/10 font-medium text-indigo-500" : "text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-strong)]"}`}>{item.title}</Link>)}</nav></div></aside>
      <main className="min-w-0"><div className="mb-6 lg:hidden"><DocsSearch items={docsLinks} /><details className="mt-3 rounded-xl border border-[var(--border)] bg-[var(--surface)]"><summary className="cursor-pointer px-4 py-3 text-sm font-medium text-[var(--text-strong)]">Browse documentation</summary><nav aria-label="Mobile documentation" className="border-t border-[var(--border)] p-2">{docsLinks.map((item) => <Link key={item.href} href={item.href} aria-current={item.href === href ? "page" : undefined} className={`block rounded-lg px-3 py-2 text-sm ${item.href === href ? "bg-indigo-500/10 font-medium text-indigo-500" : "text-[var(--text-muted)] hover:bg-[var(--surface-muted)]"}`}>{item.title}</Link>)}</nav></details></div><div className="mb-10 border-b border-[var(--border)] pb-8"><p className="eyebrow">Documentation</p><h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.045em] text-[var(--text-strong)] sm:text-5xl">{title}</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">{description}</p></div><article className="docs-prose">{children}</article><nav aria-label="Documentation pagination" className="mt-14 grid gap-4 border-t border-[var(--border)] pt-8 sm:grid-cols-2">{previous ? <Link href={previous.href} className="doc-pagination"><span>Previous</span><strong>{previous.title}</strong></Link> : <span />}{next && <Link href={next.href} className="doc-pagination text-right"><span>Next</span><strong className="inline-flex items-center justify-end gap-2">{next.title}<ArrowRightIcon className="size-4" /></strong></Link>}</nav></main>
      <aside className="hidden xl:block"><nav aria-label="On this page" className="sticky top-24"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-dim)]">On this page</p><div className="mt-4 space-y-2 border-l border-[var(--border)]">{toc.map((item) => <a key={item.id} href={`#${item.id}`} className="block border-l border-transparent px-4 text-sm leading-6 text-[var(--text-muted)] hover:border-indigo-500 hover:text-[var(--text-strong)]">{item.label}</a>)}</div></nav></aside>
    </div>
  );
}
