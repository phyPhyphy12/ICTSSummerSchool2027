/** Prefix a /public path with the GitHub Pages base path (set in next.config.mjs). */
export function asset(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (/^(https?:|blob:|data:)/.test(path)) return path;
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
