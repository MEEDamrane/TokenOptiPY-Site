import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children, centered = false }: { eyebrow: string; title: string; children?: ReactNode; centered?: boolean }) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)] sm:text-4xl lg:text-5xl">{title}</h2>
      {children && <div className="mt-5 text-base leading-8 text-[var(--text-muted)] sm:text-lg">{children}</div>}
    </div>
  );
}
