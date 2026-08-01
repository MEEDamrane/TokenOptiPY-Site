import Image from "next/image";
import Link from "next/link";
import { siteConfig as site } from "@/config/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label={`${site.name} home`}>
      <Image src={site.assets.logo} width={34} height={34} alt="" priority className="rounded-[10px] shadow-[0_0_28px_rgba(99,102,241,.24)]" />
      {!compact && <span className="font-semibold tracking-[-0.02em] text-[var(--text-strong)]">{site.name}</span>}
    </Link>
  );
}
