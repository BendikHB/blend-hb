import { defineConfig } from "sanity";
import schemas from "./sanity/schemas";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "3nr2c12j",

  dataset: "production",

  title: "Blend HB",

  apiVersion: "2024-04-018",

  basePath: "/admin",

  plugins: [structureTool()],

  schema: { types: schemas },
});

export default config;
