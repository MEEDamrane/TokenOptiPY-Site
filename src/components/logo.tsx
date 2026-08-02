import Image from "next/image";
import Link from "next/link";
import { siteConfig as site } from "@/config/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" aria-label={`${site.name} home`}>
      <Image
        src={compact ? site.assets.logo : site.assets.wordmark}
        width={compact ? 34 : 180}
        height={compact ? 34 : 60}
        alt=""
        priority
        className={compact ? "rounded-[10px] shadow-[0_0_28px_rgba(99,102,241,.24)]" : "h-11 w-auto object-contain"}
      />
    </Link>
  );
}
