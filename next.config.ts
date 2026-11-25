import type { NextConfig } from "next";

// GitHub Pages hosts project sites below /MyWebsite/, so the app needs
// that repository name as a base path. It stays empty for localhost.
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = isGitHubActions && repositoryName ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  // Generate plain HTML, CSS, and JavaScript for GitHub Pages.
  output: "export",
  basePath,

  // GitHub Pages does not run Next.js image optimization.
  images: {
    unoptimized: true,
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
