import { type SchemaTypeDefinition } from "sanity";

import service from "./service";
import accessibleImage from "./objects/accessibleImage";
import review from "./objects/review";
import about from "./about";
import gallery from "./gallery";
import reviews from "./reviews";

export const schemaTypes: SchemaTypeDefinition[] = [
  service,
  accessibleImage,
  review,
  reviews,
  about,
  gallery,
];
