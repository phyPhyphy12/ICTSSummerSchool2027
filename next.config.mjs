/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = 'ICTSSummerSchool2027';

const nextConfig = {
  output: 'export',
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repoName}` : '',
  },
};

export default nextConfig;
