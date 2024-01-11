import { type SchemaTypeDefinition } from "sanity";

import accessibleImage from "./objects/accessibleImage";
import about from "./about";
import gallery from "./gallery";
import reviews from "./reviews";
import services from "./services";
import contacts from "./contacts";

export const schemaTypes: SchemaTypeDefinition[] = [
  accessibleImage,
  services,
  reviews,
  about,
  gallery,
  contacts,
];
