"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { GithubIcon, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";

const nav = [{label:"Product",href:"/#product"},{label:"How it works",href:"/#how-it-works"},{label:"TokenGraph",href:"/#token-graph"},{label:"MCP",href:"/#mcp"},{label:"Docs",href:siteConfig.docs.home},{label:"Security",href:"/#security"}];
export function SiteHeader() {
 const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const update=()=>setScrolled(scrollY>12);update();addEventListener("scroll",update,{passive:true});return()=>removeEventListener("scroll",update)},[]);
 return <header data-scrolled={scrolled} className="site-header sticky top-0 z-50 border-b border-transparent bg-[color:var(--header-bg)] backdrop-blur-xl"><Container className="flex h-16 items-center justify-between gap-4"><Logo />
 <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">{nav.map(item=><Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>)}<a href={siteConfig.productRepositoryUrl} aria-label="Open the TokenOptiPy product repository on GitHub" className="nav-link inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer"><GithubIcon className="size-4" />GitHub</a></nav>
 <div className="flex items-center gap-2"><ThemeToggle /><Link href={siteConfig.docs.quickstart} className="button-primary hidden sm:inline-flex">Get started</Link><details className="mobile-menu relative lg:hidden"><summary className="icon-button list-none cursor-pointer" aria-label="Open navigation menu"><MenuIcon /></summary><div className="mobile-menu-panel absolute right-0 mt-3 w-64 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-2xl">{nav.map(item=><Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2.5 text-sm text-[var(--text)] hover:bg-[var(--surface-muted)]">{item.label}</Link>)}<a href={siteConfig.productRepositoryUrl} aria-label="Open the TokenOptiPy product repository on GitHub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-[var(--text)] hover:bg-[var(--surface-muted)]"><GithubIcon className="size-4" />GitHub</a><Link href={siteConfig.docs.quickstart} className="button-primary mt-2 w-full justify-center sm:hidden">Get started</Link></div></details></div>
 </Container></header>;
}
