import { createClient } from "next-sanity";

import { projectId, dataset, apiVersion } from "admin/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
