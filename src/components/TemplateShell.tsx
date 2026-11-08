import type { ReactNode } from "react";
import { DemoProvider } from "./DemoContext";

export default function TemplateShell({ demo, theme, bodyClass, children }: {
  demo: string;
  theme: string;
  bodyClass: string;
  children: ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href={theme} />
      <DemoProvider demo={demo} bodyClass={bodyClass}>{children}</DemoProvider>
    </>
  );
}
