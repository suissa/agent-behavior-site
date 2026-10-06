import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const draftSchemaPaths = [
  "/schemas/1.0.0/agent.schema.json",
  "/schemas/1.0.0/mcpq.schema.json",
] as const;

const draftSchemaHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=0, must-revalidate",
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
    return draftSchemaPaths.map((source) => ({
      source,
      headers: draftSchemaHeaders,
    }));
  },
};

export default withMDX(config);
