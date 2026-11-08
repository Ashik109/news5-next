import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "News5",
  description: "News5 — news, editorial, lifestyle and magazine.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/assets/js/uni-core/css/uni-core.min.css" />
        <link rel="stylesheet" href="/assets/css/unicons.min.css" />
        <link rel="stylesheet" href="/assets/css/prettify.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
      </head>
      <body className="uni-body overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
