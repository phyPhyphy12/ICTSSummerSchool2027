export const getAssetPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('blob:')) {
    return path;
  }
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
};
