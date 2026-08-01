"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button type="button" onClick={copy} className="copy-button" aria-label={copied ? "Copied" : "Copy code"}>
      {copied ? <CheckIcon className="size-4" /> : <CopyIcon className="size-4" />}
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
