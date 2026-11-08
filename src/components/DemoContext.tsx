"use client";

import { createContext, useContext, useRef, type ComponentProps, type ReactNode } from "react";
import Link from "next/link";
import useTemplateRuntime from "./useTemplateRuntime";

const DemoContext = createContext("main");

export function DemoProvider({ demo, bodyClass, children }: { demo: string; bodyClass: string; children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  // This parent's effects run after its page and links have hydrated.
  useTemplateRuntime(children, rootRef);
  return <DemoContext.Provider value={demo}><div ref={rootRef} className={bodyClass} data-news5-page>{children}</div></DemoContext.Provider>;
}

// The same editorial/shop components can be reused across every demo theme.
export function SiteLink({ href, ...props }: Omit<ComponentProps<typeof Link>, "href"> & { href: string }) {
  const demo = useContext(DemoContext);
  return <Link {...props} href={`/${demo}${href === "/" ? "" : href}`} prefetch={false} />;
}
