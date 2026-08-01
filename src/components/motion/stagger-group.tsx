"use client";

import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { Reveal } from "./reveal";

export function StaggerGroup({ children, className = "", step = 80 }: { children: ReactNode; className?: string; step?: number }) {
  return <div className={className}>{Children.map(children, (child, index) => (
    <Reveal delay={index * step}>{isValidElement(child) ? cloneElement(child) : child}</Reveal>
  ))}</div>;
}
