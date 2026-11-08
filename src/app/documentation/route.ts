import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

export async function GET() {
  const source = await readFile(path.join(process.cwd(), "documentation/index.html"), "utf8");
  // Keep the original file portable, while resolving its logo from either web URL.
  const html = source.replaceAll('src="assets/logo.svg"', 'src="/documentation/assets/logo.svg"');
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
