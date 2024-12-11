import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/shemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  title: "My portfolio",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2021-03-25",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
