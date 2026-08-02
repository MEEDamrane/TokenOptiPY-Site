"use client";

import { type CSSProperties, type HTMLAttributes, useEffect, useRef, useState } from "react";

export function Reveal({ delay = 0, className = "", style, ...props }: HTMLAttributes<HTMLDivElement> & { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const frame = requestAnimationFrame(() => setReady(true));
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12, rootMargin: "0px 0px -32px" });
    observer.observe(element);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, []);
  return <div ref={ref} className={`reveal ${ready ? "is-ready" : ""} ${visible ? "is-visible" : ""} ${className}`} style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties} {...props} />;
}
