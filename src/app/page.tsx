import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { TokenGraphShowcase } from "@/components/marketing/token-graph-showcase";
import { ComparisonTable, Faq, FinalCta, HotspotInvestigation, InstallWorkflow, LanguageSupport, McpWorkflow, PrivacyArchitecture, ProofStrip, Section, TokenSources } from "@/components/marketing/sections";
import { siteConfig as site } from "@/config/site";
export const metadata: Metadata = { title: "TokenOptiPy — See where your LLM tokens go", description: site.description, alternates: { canonical: "/" } };
export default function HomePage() { return <><Hero/><ProofStrip/><InstallWorkflow/><Section id="token-graph" eyebrow="Interactive TokenGraph" title="Follow token flow from source to model call."><TokenGraphShowcase/></Section><TokenSources/><HotspotInvestigation/><McpWorkflow/><LanguageSupport/><PrivacyArchitecture/><ComparisonTable/><Faq/><FinalCta/></> }
