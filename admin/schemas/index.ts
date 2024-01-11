import { type SchemaTypeDefinition } from "sanity";

import accessibleImage from "./objects/accessibleImage";
import review from "./objects/review";
import about from "./about";
import gallery from "./gallery";
import reviews from "./reviews";
import services from "./services";
import service from "./objects/service";
import contacts from "./contacts";
import reviews2 from "./reviews2";

export const schemaTypes: SchemaTypeDefinition[] = [
  service,
  services,
  accessibleImage,
  review,
  reviews,
  reviews2,
  about,
  gallery,
  contacts,
];
