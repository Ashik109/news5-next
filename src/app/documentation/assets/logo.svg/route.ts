import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

export async function GET() {
  const logo = await readFile(path.join(process.cwd(), "documentation/assets/logo.svg"), "utf8");
  return new Response(logo, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
