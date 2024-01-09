import { type SchemaTypeDefinition } from "sanity";

import service from "./service";
import accessibleImage from "./objects/accessibleImage";
import review from "./review";
import about from "./about";
import gallery2 from "./gallery";

export const schemaTypes: SchemaTypeDefinition[] = [
  service,
  accessibleImage,
  review,
  about,
  gallery2,
];
