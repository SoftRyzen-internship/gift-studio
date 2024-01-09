import { type SchemaTypeDefinition } from "sanity";

import service from "./schemas/service";
import accessibleImage from "./schemas/objects/accessibleImage";
import review from "./schemas/reviews";
import about from "./schemas/about";

export const schemaTypes: SchemaTypeDefinition[] = [
  service,
  accessibleImage,
  review,
  about,
];
