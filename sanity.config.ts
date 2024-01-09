import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./admin/schemas";
import { myStructure } from "admin/deskStructure";

export default defineConfig({
  name: "default",
  title: "project test sanity",
  basePath: "/admin",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: "production",

  plugins: [
    // deskTool(),
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
