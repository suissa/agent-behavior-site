import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const publishedSchemaPaths = [
  "/schemas/1.0.0/agent.schema.json",
  "/schemas/1.0.0/mcpq.schema.json",
] as const;

const immutableSchemaHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable",
  },
];

const config: NextConfig = {
  agentRules: false,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return publishedSchemaPaths.map((source) => ({
      source,
      headers: immutableSchemaHeaders,
    }));
  },
};

export default withMDX(config);
